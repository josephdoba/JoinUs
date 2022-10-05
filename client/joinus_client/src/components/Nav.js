import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, ButtonGroup } from "@mui/material";
import { redirect } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { reactLocalStorage } from "reactjs-localstorage";
import ReactSwitch from "react-switch";

import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import Login from "./Login";
import NavDisplay from "./NavDisplay";

export default function Nav(props) {
  const { user, setUser, usersData } = props;
  const [userID, setUserID] = useState(); //value taken from submitting a form in the email field

  const navigate = useNavigate();

  // for handling user navbar buttons
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    reactLocalStorage.remove("currentUser");
    setUser({});
    setAnchorElUser(null);
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

  async function handleSubmit(e) {
    e.preventDefault();
    reactLocalStorage.setObject("currentUser", {
      id: userID,
    });
    setUserID("");
    await wait(500);
    navigate("/user");
  }
  
  const check = reactLocalStorage.getObject("currentUser");
  const findUserByID = (id, usersData) => {
    const current = usersData[id - 1];
    setUser(current);
    console.log(current);
  };
  
  findUserByID(check.id, usersData);

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

          <NavDisplay
            user={user}
            handleOpenUserMenu={handleOpenUserMenu}
            handleLogout={handleLogout}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            handleClickOpen={handleClickOpen}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
