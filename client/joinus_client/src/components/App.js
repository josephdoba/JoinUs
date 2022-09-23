import React from "react";
import Herobanner from "./herobanner";
import Navbar from "./Navbar";
import Cards from "./Cards";
import "./app.scss";
import { createContext, useState } from "react";
import Eventlist from "./Eventlist";

export const ThemeContext = createContext(null);

const App = function () {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Herobanner />
        <Cards />
        <Eventlist />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
