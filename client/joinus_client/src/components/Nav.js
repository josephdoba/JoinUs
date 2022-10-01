import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  ButtonGroup,
  Modal,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { reactLocalStorage } from "reactjs-localstorage";

import { Navigate, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { findUserByID } from "../helpers/user_selectors";
import { TextField } from "@mui/material";
import Login from "./Login";

const settings = ["Profile", "My Events", "Logout"];

export default function Nav(props) {
  const { user, setUser, success, setSuccess, usersData } = props;

  const [userID, setUserID] = useState("");

  const navigate = useNavigate();

  //for handling the login pop up
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  // end

  // for handling user navbar buttons
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    if (anchorElUser === "Logout") {
      setUser({});
    }
    setAnchorElUser(null);
  };
  // end of user nav

  const loggedIn = () => {
    if (user) {
      return (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user.name} src={user.picture} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }

    return (
      <Box sx={{ flexGrow: 0 }}>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button>Log in</Button>
          <Button>Sign Up</Button>
        </ButtonGroup>
      </Box>
    );
  };

  return (
    <AppBar
      position="static"
      style={{ background: "#595959", boxShadow: "none" }}
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <ButtonGroup
              disableElevation
              variant="outlined"
              aria-label="Disabled elevation buttons"
            >
              <Button onClick={handleClickOpen}>Log in</Button>
              <Button onClick={() => {}}>Sign Up</Button>
            </ButtonGroup>
          </Box>

          <Login open={open} setOpen={setOpen} setUserID={setUserID} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.picture} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
