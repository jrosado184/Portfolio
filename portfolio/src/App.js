import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import React, { useState } from "react";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <Header dark={dark} setDark={setDark} />
      <About dark={dark} />
      <Projects />
    </div>
  );
};

export default App;
