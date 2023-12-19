// Imports
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && 'dark'}`}>
      <main className='bg-white dark:bg-black h-screen'>
        <h1 className='text-3xl font-bold w-fit m-auto dark:text-white'>
          Hello world
        </h1>
        <p className='max-w-sm m-auto mt-5 dark:text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora
          ab doloribus non assumenda recusandae sit officiis rem maxime. Cum
          debitis quidem expedita harum culpa corrupti pariatur ad veritatis
          quibusdam?
        </p>
        {/* Button for dark mode */}
        <button
          className='absolute text-5xl w-16 h-12 bottom-16 right-16 bg-neutral-900 dark:bg-neutral-50 rounded-full text-white dark:text-black'
          onClick={toggleDarkMode}
        >
          {darkMode ? '🌞' : '🌚'}
        </button>
      </main>
    </div>
  );
}

export default App;
