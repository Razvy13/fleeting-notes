import { getFleetingNotes } from "@/api-calls/server-api";
import NewNote from "@/components/ui/new-note";
import NotesList from "@/components/ui/notes-list";

export default async function Home() {
  const notes = await getFleetingNotes();

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
