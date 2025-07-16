import React from "react";

export const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block font-semibold mb-1 text-purple-700"
      >
        {label}
      </label>
      <textarea
        name={name}
        className="w-full p-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/90 shadow-sm"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};
