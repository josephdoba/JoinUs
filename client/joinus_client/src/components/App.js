import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Home";
import Userpage from "./UserPage/index";
import "./app.scss";
import Nav from "./Nav/Nav";
import IndividualEvent from "./IndividualEvent";
import useAppData from "../hooks/useAppData";

import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export const ThemeContext = createContext(null);

const App = function () {

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          mode: 'light',
          primary: {
            main: '#ffac33',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: '#fdf3e4',
          },
        }
        : {
          // palette values for dark mode
          mode: 'dark',
          primary: {
            main: '#ffac33',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: '#424242',
          },
        }),
    },
  });

  const { eventsData, usersData, categoriesData, joinedEvents, login, logout } =
    useAppData();


  const [open, setOpen] = useState(false); // for the form. do not change
  const [error, setError] = useState(false);

  // https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router#:~:text=That%20also%20means%20that%20order%20is%20important

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>

        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Nav
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
                  setMode={setMode}
                  mode={mode}
                  joinedEvents={joinedEvents}
                  eventsData={eventsData}
                  usersData={usersData}
                  categoriesData={categoriesData}
                  setOpen={setOpen}
                  open={open}
                  error={error}
                  setError={setError}
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
                  error={error}
                  setError={setError}
                />
              }
            />
          </Routes>
        </Box>

      </Router>
    </ThemeProvider>
  );
};

export default App;
