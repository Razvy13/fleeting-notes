"use client";
import NewNote from "@/components/ui/new-note";
import NotesList from "@/components/ui/notes-list";
import { useNotes } from "@/hooks/useNotes";

export default function Home() {
  const { notes } = useNotes();

  return (
    <>
      <h1 className="text-5xl font-bold">Fleeting Notes</h1>
      <div className="flex gap-5 flex-row">
        <NewNote />
        <div className="border-l border-gray-400"></div>
        <NotesList notes={notes} />
      </div>
    </>
  );
}
