"use client";
import { insertEmptyFleetingNoteWithColor } from "@/api-calls/client-api";
import style from "@/styles/fade-in-animation.module.css";

const NewNote = () => {
  const notesColors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-orange-300",
  ];

  return (
    <>
      <div className="flex flex-col gap-5 items-center w-fit">
        {notesColors.map((color) => (
          <button
            className={`${color} w-10 h-10 rounded-full ${style["animate-fade-in"]}`}
            key={color}
            onClick={() => insertEmptyFleetingNoteWithColor(color)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default NewNote;
