import { getFleetingNotes } from "@/api-calls/server-api";
import NotesList from "@/components/ui/notes-list";

export default async function Home() {
  const notes = await getFleetingNotes();

  return (
    <>
      <h1 className="text-5xl font-bold">Fleeting Notes</h1>
      <div className="flex flex-row">
        <div className="w-24">sidebar</div>
        <NotesList notes={notes} />
      </div>
    </>
  );
}
