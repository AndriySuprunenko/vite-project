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
      <div className='bg-white dark:bg-black h-screen w-full'>
        {/* Container for banner and header */}
        <div
          className={`max-w-7xl m-auto relative ${
            (darkMode && 'bg-dark') || 'bg-light'
          }`}
        >
          <Header />
          {/* Button for dark mode */}
          <button
            className='text-5xl w-16 h-12 bg-neutral-500 dark:bg-neutral-50 rounded-full text-white dark:text-black z-50'
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
