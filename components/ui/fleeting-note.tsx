"use client";
import { useUpdateFleetingNote } from "@/hooks/useUpdateFleetingNote";
import { FleetingNote } from "@/types/note";

interface Props {
  note: FleetingNote;
}

const Note = ({ note }: Props) => {
  const { noteTitle, setNoteTitle, handleUpdateNote } =
    useUpdateFleetingNote(note);
  return (
    <div
      className={
        note.background_color +
        " p-4 rounded-lg shadow-lg w-64 h-64 flex flex-col justify-between gap-4"
      }
    >
      <textarea
        className="text-lg font-medium border-0 bg-transparent focus:outline-none focus:ring-0 h-full resize-none"
        value={noteTitle || ""}
        onChange={(e) => setNoteTitle(e.target.value)}
        onBlur={() => {
          if (note.title !== noteTitle) handleUpdateNote();
        }}
      ></textarea>
      <div>
        {new Date(note.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </div>
    </div>
  );
};

export default Note;
