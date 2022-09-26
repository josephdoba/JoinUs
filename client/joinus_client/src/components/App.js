import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import FunPhoto from "./Home/FunPhotos";

import "./app.scss";

import { createContext, useState } from "react";
import IndividualEvent from "./IndividualEvent";

export const ThemeContext = createContext(null);

const App = function () {
  const [theme, setTheme] = useState("light");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({});

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
          success={success}
          setSuccess={setSuccess}
          user={user}
          setUser={setUser}
        />
        <FunPhoto/>
        <Home />
        <IndividualEvent />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
