// Imports
import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Statistic from './components/Statistic';
import Benefits from './components/Benefits';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    // Main
    <div className={`${darkMode && 'dark'}`}>
      <div className='bg-white dark:bg-custom-blue-deep w-full'>
        <div
          className={`max-w-[1440px] m-auto relative pt-[30px] lg:pb-[120px] ${
            (darkMode && 'bg-dark') || 'bg-light'
          }`}
        >
          <Header handlClick={toggleDarkMode} darkMode={darkMode} />
          <Banner />
        </div>
        <div className='max-w-[1440px] m-auto relative bg-white dark:bg-custom-blue-deep px-[135px]'>
          <Statistic />
          <Benefits />
        </div>
      </div>
    </div>
  );
};

export default App;
