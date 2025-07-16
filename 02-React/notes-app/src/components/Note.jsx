export const Note = ({ note, deleteNote }) => {
  return (
    <div
      className="p-5 bg-white/90 rounded-xl shadow-lg border-l-8 mb-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl flex flex-col gap-2"
      style={{
        borderLeftColor:
          note.priority === "High"
            ? "#e11d48"
            : note.priority === "Medium"
            ? "#f59e42"
            : "#22c55e",
      }}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-1">{note.title}</h3>
      <div className="flex flex-wrap gap-3 text-xs mb-1">
        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">
          {note.category}
        </span>
        <span
          className={`px-2 py-1 rounded-full font-semibold ${
            note.priority === "High"
              ? "bg-red-100 text-red-700"
              : note.priority === "Medium"
              ? "bg-orange-100 text-orange-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {note.priority}
        </span>
      </div>
      <p className="text-gray-700 text-sm mb-2">{note.description}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className="self-end mt-2 text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold shadow hover:bg-red-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        🗑️ Delete
      </button>
    </div>
  );
};
