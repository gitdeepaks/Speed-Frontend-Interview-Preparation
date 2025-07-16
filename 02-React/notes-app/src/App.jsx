import { useState, useEffect } from 'react';
import { NoteForm } from './components/NoteForm';
import { NoteList } from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm('Are you sure ?');
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto mt-12 p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-200 transition-all duration-300">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700 drop-shadow-sm tracking-tight">
        📘 Notes App
      </h2>
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
