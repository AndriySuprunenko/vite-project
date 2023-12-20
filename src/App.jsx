// Imports
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && 'dark'}`}>
      {/* Frame */}
      <div className='bg-white dark:bg-custom-blue-deep h-screen w-full'>
        {/* Container for banner and header */}
        <div
          className={`max-w-7xl m-auto relative py-[30px] ${
            (darkMode && 'bg-dark') || 'bg-light'
          }`}
        >
          <Header />
          {/* Button for dark mode */}
          <button
            className='absolute top-10 right-4 text-5xl w-16 h-14 bg-white dark:bg-neutral-50 rounded-full text-white dark:text-black z-50'
            onClick={toggleDarkMode}
          >
            {darkMode ? '🌞' : '🌚'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
