import React from "react";
import Herobanner from "./herobanner";
import Navbar from "./Navbar";
import Cards from "./Cards";
import "./app.scss";
import { createContext, useState } from "react";
import Eventlist from "./Eventlist";
import Userpage from "./Userpage";

export const ThemeContext = createContext(null);

const App = function () {
  const [theme, setTheme] = useState("light");
  const [success, setSuccess] = useState(false)
  const [user, setUser] = useState({})

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    //   <div id={theme}>
    //     <Navbar toggleTheme={toggleTheme} theme={theme} success={success} setSuccess={setSuccess} user={user} setUser={setUser}/>
    //     <Herobanner />
    //     <Cards />
    //     <Eventlist />
    //   </div>
    // </ThemeContext.Provider>
    <Userpage />
  );
};

export default App;
