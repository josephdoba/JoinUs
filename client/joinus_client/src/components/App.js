import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import FunPhoto from "./Home/FunPhotos";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from "./Chat";

import "./app.scss";

import { createContext, useState } from "react";
import IndividualEvent from "./IndividualEvent";
import Userpage from "./Userpage";

export const ThemeContext = createContext(null);

const App = function () {
  const [theme, setTheme] = useState("light");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({});

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Router>
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
          <Routes>
            <Route path='/' element={<div><FunPhoto /> <Home /> <IndividualEvent /> </div> } />
            <Route path='/event/chat' element={<Chat user={user}/>} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
