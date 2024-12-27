import { useDarkMode } from "@/context/DarkModeProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ToggleDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <li
      onClick={toggleDarkMode}
      className={`cursor-pointer w-10 h-5 ${
        !isDarkMode ? "bg-secondary-300" : "bg-primary-900"
      } flex items-center px-1 rounded-lg`}
    >
      <div
        className={`transition-all duration-500 ${
          !isDarkMode && "-translate-x-4"
        }`}
      >
        {!isDarkMode ? (
          <SunIcon className="w-5 h-5" />
        ) : (
          <MoonIcon className="w-5 h-5 text-secondary-100" />
        )}
      </div>
    </li>
  );
};

export default ToggleDarkMode;
