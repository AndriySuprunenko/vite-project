// Imports
import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Statistic from "./components/Statistic";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    // Main
    <div className={`${darkMode && "dark"}`}>
      {/* Wrapper */}
      <div className="bg-white dark:bg-custom-blue-deep w-full">
        {/* Container for components */}
        <div
          className={`max-w-[1440px] m-auto relative pt-[30px] pb-[120px] ${
            (darkMode && "bg-dark") || "bg-light"
          }`}
        >
          {/* Button for dark mode */}
          <button
            className="absolute top-[50px] right-10 text-4xl w-10 h-10 bg-white dark:bg-neutral-50 rounded-full text-white dark:text-black z-50"
            onClick={toggleDarkMode}
          >
            {darkMode ? "🌞" : "🌚"}
          </button>
          {/* Components */}
          <Header />
          <Banner />
        </div>
        {/* Other components */}
        <div className="max-w-[1440px] m-auto relative bg-white dark:bg-custom-blue-deep px-[135px]">
          <Statistic />
        </div>
      </div>
    </div>
  );
}

export default App;
