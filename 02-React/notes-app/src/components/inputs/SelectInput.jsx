export const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block font-semibold mb-1 text-purple-700"
      >
        {label}
      </label>
      <select
        name={name}
        className="w-full p-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 bg-white/90 shadow-sm"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
