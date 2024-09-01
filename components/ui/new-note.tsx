"use client";
import { insertEmptyFleetingNoteWithColor } from "@/api-calls/client-api";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const NewNote = () => {
  const notesColors = ["bg-red-500", "bg-blue-500", "bg-lime-400"];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-5 items-center w-fit">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-gray-800 text-white rounded-full p-2"
        >
          <PlusIcon />
        </button>
        {notesColors.map((color) => (
          <button
            className={`${color} w-6 h-6 rounded-full`}
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "scale(1)" : "scale(0)",
              transition: "all 0.3s ease",
            }}
            key={color}
            onClick={() => insertEmptyFleetingNoteWithColor(color)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default NewNote;
