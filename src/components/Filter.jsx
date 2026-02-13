import React, { useEffect, useRef, useState } from "react";

export const Filter = ({
  value,
  onChange,
  options = ["Africa", "Americas", "Asia", "Europe", "Oceania"],
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const display = value || "All Regions";

  return (
    <div className="w-48 md:w-56 mx-auto relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="w-full pl-11 pr-4 py-3 flex items-center justify-between rounded-lg bg-white dark:bg-[#313946] border border-transparent focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 text-black dark:text-white shadow-md focus:outline-none "
      >
        <span className="text-sm">{display}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${open ? "transform rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-700 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 text-black dark:text-white rounded-lg shadow-lg overflow-hidden z-50"
        >
          <li
            role="option"
            aria-selected={value === ""}
            onClick={() => {
              if (onChange) onChange("");
              setOpen(false);
            }}
            className={`px-4 py-3 cursor-pointer text-sm`}
          >
            All Regions
          </li>

          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              onClick={() => {
                if (onChange) onChange(opt);
                setOpen(false);
              }}
              className={`px-4 py-3 cursor-pointer text-sm `}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
