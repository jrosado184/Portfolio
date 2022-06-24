import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import React, { useState } from 'react';

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className='dark:bg-gray-700 border-neutral-100'>
        <Header dark={dark} setDark={setDark} />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default App;
