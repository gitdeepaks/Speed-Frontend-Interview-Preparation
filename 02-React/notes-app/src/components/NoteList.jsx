import React from "react";
import { Note } from "./Note";

export const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return (
      <p className="text-center text-lg text-purple-400 font-semibold mt-10 animate-pulse">
        No Notes yet. Add your first note! ✍️
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};
