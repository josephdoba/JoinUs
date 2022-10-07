import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Home";
import Userpage from "./UserPage/index";
import "./app.scss";
import Nav from "./Nav/Nav";

import IndividualEvent from "./IndividualEvent";
import useAppData from "../hooks/useAppData";
import useSharedUser from "../hooks/useSharedUser";
import useSharedEvent from "../hooks/useSharedEvent";

import { Box } from "@mui/material";

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
    comments,
  } = useAppData();
  const [theme, setTheme] = useState("light");

  const { user, setUser } = useSharedUser();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router#:~:text=That%20also%20means%20that%20order%20is%20important

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Box id={theme}>
          <Nav
            toggleTheme={toggleTheme}
            theme={theme}
            usersData={usersData}
            login={login}
            logout={logout}
          />
          <Routes>
            {/* <Route path="/dashboard" element={<Userpage />}>
              {/* nested route placeholders (syntax for later if we decide to refactor front end routes):  */}
            {/* <Route index element={<Userpage/>}/>
              <Route path='/myevents' element={false}/>
              <Route path='/history' element={false}/>
              <Route path='/create' element={false}/>
              <Route path='/join' element={false}/> */}
            {/* </Route> */}
            <Route
              path="/"
              element={
                <div>
                  {/* <FunPhoto />  */}
                  <Home />{" "}
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
                  setReload={setReload}
                  reload={reload}
                  comments={comments}
                />
              }
            />
            <Route
              path="/event"
              element={
                <IndividualEvent
                  comments={comments}
                  usersData={usersData}
                  joinedEvents={joinedEvents}
                  user={user}
                  reload={reload}
                  setReload={setReload}
                />
              }
            />
          </Routes>
        </Box>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
