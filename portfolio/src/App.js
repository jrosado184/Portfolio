import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import React, { useState } from 'react';

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark && 'dark'}>
      <div className='dark:bg-neutral-900	'>
        <Header dark={dark} setDark={setDark} />
        <About dark={dark} />
      </div>
      {/* <Projects dark={dark} /> */}
    </div>
  );
};

export default App;
