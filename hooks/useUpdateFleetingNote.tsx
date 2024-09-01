import { updateFleetingNote } from "@/api-calls/client-api";
import { FleetingNote } from "@/types/note";
import { useState } from "react";

export const useUpdateFleetingNote = (note: FleetingNote) => {
  const [noteTitle, setNoteTitle] = useState(note.title);

  const handleUpdateNote = async () => {
    const { error } = await updateFleetingNote({
      ...note,
      title: noteTitle,
    });

    console.error(error);
  };

  return {
    noteTitle,
    setNoteTitle,
    handleUpdateNote,
  };
};
