import { FaSearch } from "react-icons/fa";

export const Search = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
      <input
        onChange={(e) => onChange(e.target.value)}
        type="text"
        aria-label="Search for a country"
        placeholder="Search for a country..."
        className="w-full pl-11 pr-4 py-3 rounded-lg bg-white dark:bg-(--theme-bg) shadow-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400"
      />
    </div>
  );
};
