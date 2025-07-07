import React from "react";
import { FaBook, FaCut, FaRobot } from "react-icons/fa";
import Portal from "./Portal";

const modeOptions = [
  {
    value: "chi_tiet",
    text: "Tóm tắt chi tiết",
    icon: <FaBook className="inline" />,
  },
  {
    value: "ngan",
    text: "Tóm tắt ngắn",
    icon: <FaCut className="inline" />,
  },
  {
    value: "tuy_chinh",
    text: "Trả lời tự do",
    icon: <FaRobot className="inline" />,
  },
];

function ModeDropdown({ mode, setMode, loading }) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const selectedOption = modeOptions.find((opt) => opt.value === mode);
  const buttonRef = React.useRef(null);

  return (
    <div className="relative flex-1 flex min-w-[180px] mt-4 mb-8">
      <button
        ref={buttonRef}
        type="button"
        className="rounded-xl border-2 border-transparent focus:border-blue-400 dark:focus:border-green-400 bg-white/90 dark:bg-gray-800/90 flex items-center gap-2 px-6 py-3 font-semibold text-lg shadow-md hover:ring-2 hover:ring-blue-300 dark:hover:ring-green-400 focus:ring-2 focus:ring-blue-300 dark:focus:ring-green-400 w-full transition-all duration-200 outline-none"
        onClick={() => setDropdownOpen((v) => !v)}
        disabled={loading}
        style={{ minHeight: "56px" }}
      >
        {selectedOption.icon} {selectedOption.text}
        <svg
          className={`ml-2 w-5 h-5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {dropdownOpen && (
        <Portal>
          <div
            className="absolute left-0 right-0 mt-2 w-full bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl backdrop-blur-lg animate-fade-in overflow-hidden"
            style={{
              zIndex: 9999,
              position: "absolute",
              top:
                buttonRef?.current?.getBoundingClientRect().bottom + window.scrollY ||
                0,
              left:
                buttonRef?.current?.getBoundingClientRect().left + window.scrollX ||
                0,
              width: buttonRef?.current?.offsetWidth || "auto",
            }}
          >
            {modeOptions.map((opt) => (
              <button
                key={opt.value}
                className={`w-full text-left px-6 py-3 flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-800/80 transition-all duration-150 rounded-xl text-lg font-medium ${
                  mode === opt.value
                    ? "font-bold text-blue-600 dark:text-green-400 bg-blue-100/40 dark:bg-green-900/30"
                    : ""
                }`}
                onClick={() => {
                  setMode(opt.value);
                  setDropdownOpen(false);
                }}
                disabled={loading}
              >
                {opt.icon} {opt.text}
              </button>
            ))}
          </div>
        </Portal>
      )}
    </div>
  );
}

export default ModeDropdown;
