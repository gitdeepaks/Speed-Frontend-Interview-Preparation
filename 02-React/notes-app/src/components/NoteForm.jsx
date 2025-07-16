import { useState } from "react";
import { TextInput } from "./inputs/TextInput";
import { SelectInput } from "./inputs/SelectInput";
import { TextAreaInput } from "./inputs/TextAreaInput";

export const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  const [isFormVisible, setIsformVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    // create note object
    const newNote = {
      id: Date.now(),
      ...formData,
    };

    //Add notes to state
    setNotes([newNote, ...notes]);

    //reset the form, data
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };
  return (
    <>
      {/* toggle button */}
      <button
        onClick={() => setIsformVisible(!isFormVisible)}
        className="w-full bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 border-2 border-purple-400 text-purple-900 font-semibold py-2 rounded-xl cursor-pointer hover:bg-purple-500 hover:border-pink-400 hover:text-white transition-all duration-200 shadow-md mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        {isFormVisible ? "Hide Form ❌" : "Add New Note ➕"}
      </button>
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 space-y-4 p-6 bg-white/80 rounded-xl shadow-lg border border-purple-100"
        >
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              {
                value: "High",
                label: "🔴 High",
              },
              {
                value: "Medium",
                label: "🟠 Medium",
              },
              {
                value: "Low",
                label: "🟢 Low",
              },
            ]}
          />

          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "📁 Work" },
              { value: "Personal", label: "🏠 Personal" },
              { value: "Ideas", label: "💡 Ideas" },
            ]}
          />
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-purple-600 text-white font-bold py-2 rounded-xl cursor-pointer hover:bg-purple-800 transition-all duration-200 shadow focus:outline-none focus:ring-2 focus:ring-purple-400 mt-2">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};
