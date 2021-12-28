import Header from "./components/Header";
import React, { useState } from "react";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
