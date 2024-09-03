import { FleetingNote } from "@/types/note";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export const useNotes = () => {
  const [notes, setNotes] = useState<FleetingNote[] | null>(null);
  const supabase = createClient();

  //get all notes
  useEffect(() => {
    const makeRequest = async () => {
      const { data: notes }: { data: FleetingNote[] | null } = await supabase
        .from("notes")
        .select()
        .order("created_at", { ascending: false });
      setNotes(notes);
    };

    makeRequest();
  }, []);

  const handleInsertNote = ({ new: newNote }: { new: FleetingNote }) => {
    setNotes((prevNotes) => {
      return [newNote, ...(prevNotes ?? [])];
    });
  };

  const handleDeleteNote = ({ old: oldNote }: { old: FleetingNote }) => {
    setNotes((prevNotes) => {
      return prevNotes?.filter((note) => note.id !== oldNote.id) ?? [];
    });
  };

  //subscribe to notes insert
  useEffect(() => {
    const channel = supabase
      .channel("notes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "notes" },
        handleInsertNote
      )
      .on<FleetingNote>(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "notes" },
        (payload) => {
          handleDeleteNote(payload as { old: FleetingNote });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return {
    notes,
  };
};
