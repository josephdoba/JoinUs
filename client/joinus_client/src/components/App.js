import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Home";
import Chat from "./Chat";
import Userpage from "./UserPage/index";
import "./app.scss";

import IndividualEvent from "./IndividualEvent";
import useAppData from "../hooks/useAppData";

import Nav from "./Nav/Nav";
import useSharedUser from "../hooks/useSharedUser";

export const ThemeContext = createContext(null);

const App = function () {
  const {
    eventsData,
    usersData,
    categoriesData,
    joinedEvents,
    setReload,
    reload,
    login,
    logout,
  } = useAppData();
  const [theme, setTheme] = useState("light");
  const [event, setEvent] = useState({});
  const [selected, setSelected] = useState(null);
  const { user, setUser } = useSharedUser();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // need to figure out how to stop local store from setting info to null when refreshing /user

  // https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router#:~:text=That%20also%20means%20that%20order%20is%20important

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Nav
            toggleTheme={toggleTheme}
            theme={theme}
            user={user}
            usersData={usersData}
            login={login}
            logout={logout}
            setUser={setUser}
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
                  {/* <FunPhoto />  */}
                  <Home event={event} />{" "}
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
                  setSelected={setSelected}
                  selected={selected}
                  setReload={setReload}
                  reload={reload}
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
