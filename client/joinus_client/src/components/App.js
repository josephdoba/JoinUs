import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Home";
import Userpage from "./UserPage/index";
import "./app.scss";
import Nav from "./Nav/Nav";

import IndividualEvent from "./IndividualEvent";
import useAppData from "../hooks/useAppData";

import { Box } from "@mui/material";

export const ThemeContext = createContext(null);

const App = function () {
  const { eventsData, usersData, categoriesData, joinedEvents, login, logout } =
    useAppData();
  const [theme, setTheme] = useState("light");



  const [open, setOpen] = useState(false); // for the form. do not change

  const [openError, setOpenError] = useState(false); // for error message

  // https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router#:~:text=That%20also%20means%20that%20order%20is%20important

  return (
    <Router>
      <ThemeContext.Provider value={{ theme }}>
        <Box id={theme}>
          <Nav
            theme={theme}
            usersData={usersData}
            login={login}
            logout={logout}
          />
          <Routes>
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
                  usersData={usersData}
                  categoriesData={categoriesData}
                  setOpen={setOpen}
                  open={open}
                  openError={openError}
                  setOpenError={setOpenError}
                />
              }
            />
            <Route
              path="/event"
              element={
                <IndividualEvent
                  usersData={usersData}
                  joinedEvents={joinedEvents}
                  setOpen={setOpen}
                  open={open}
                  openError={openError}
                  setOpenError={setOpenError}
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
