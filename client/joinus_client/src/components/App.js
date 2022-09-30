import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import FunPhoto from "./Home/FunPhotos";
import Chat from "./Chat";
import Userpage from "./UserPage/index";
import "./app.scss";

import IndividualEvent from "./IndividualEvent";
import useAppData from "../hooks/useAppData";

export const ThemeContext = createContext(null);

const App = function () {
  const { eventsData, usersData, categoriesData, joinedEvents } = useAppData();
  const [theme, setTheme] = useState("light");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({});
  const [event, setEvent] = useState({});

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router#:~:text=That%20also%20means%20that%20order%20is%20important

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
            usersData={usersData}
          />
          <Routes>
            {/* <Route path="/dashboard" element={<Userpage />}>
              {/* nested route placeholders:  */}
            {/* <Route index element={<Userpage/>}/>
              <Route path='/myevents' element={false}/>
              <Route path='/history' element={false}/>
              <Route path='/create' element={false}/>
              <Route path='/join' element={false}/> */}
            {/* </Route> */}
            <Route path="/event/chat" element={<Chat user={user} />} />
            <Route
              path="/"
              element={
                <div>
                  <FunPhoto /> <Home />{" "}
                </div>
              }
            />
            <Route
              path="/user"
              element={
                <Userpage
                  joinedEvents={joinedEvents}
                  eventsData={eventsData}
                  user={user}
                  usersData={usersData}
                  categoriesData={categoriesData}
                  setEvent={setEvent}
                />
              }
            />
            <Route
              path="/event"
              element={
                <IndividualEvent
                  event={event}
                  usersData={usersData}
                  joinedEvents={joinedEvents}
                />
              }
            />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
