import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography, Style } from "@mui/material";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { reactLocalStorage } from "reactjs-localstorage";
import ReactSwitch from "react-switch";

import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import Login from "./Login";
import NavDisplayUser from "./NavDisplayUser";
import NavDisplayLogin from "./NavDisplayLogin";

export default function Nav(props) {
  const { usersData, login, logout, user, setUser } = props;
  const [userID, setUserID] = useState(); //value taken from submitting a form in the email field

  console.log(`---- ${user.name}`);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      return;
    }
    setUser(currentUser);
  }, [setUser]);

  const navigate = useNavigate();

  // for handling user navbar buttons
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    navigate("/user");
  };

  const handleLogout = async () => {
    logout();
    localStorage.removeItem("currentUser");
    setAnchorElUser(null);
    await wait(500);
    navigate("/");
  };
  // end of user nav

  //for handling the login pop up
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // end
  // Kyler's code

  function wait(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(userID);
    setUserID("");
    await navigate("/user");
  };

  return (
    <AppBar
      position="static"
      style={{ background: "inherit", boxShadow: "none" }}
    >
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Avatar sx={{ width: 80, height: 80 }} alt="Logo" src={logo} />
          </Typography>
          <ReactSwitch
            className="toggle-switch"
            onChange={props.toggleTheme}
            checked={props.theme === "dark"}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Login
            open={open}
            setUserID={setUserID}
            userID={userID}
            usersData={usersData}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />

          <NavDisplayLogin handleClickOpen={handleClickOpen} />

          <NavDisplayUser
            user={user}
            handleOpenUserMenu={handleOpenUserMenu}
            handleLogout={handleLogout}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
