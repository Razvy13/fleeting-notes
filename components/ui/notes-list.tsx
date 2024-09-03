import { FleetingNote } from "@/types/note";
import Note from "./fleeting-note";

interface Props {
  notes: FleetingNote[] | null;
}

const NotesList = ({ notes }: Props) => {
  return (
    <div className="flex flex-wrap gap-10">
      {notes?.length ? (
        notes.map((note) => <Note key={note.id} note={note} />)
      ) : (
        <div>There is no fleeting notes</div>
      )}
    </div>
  );
};

export default NotesList;
