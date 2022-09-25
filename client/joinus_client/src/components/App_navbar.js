import React from "react";
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, styled, Toolbar, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import logo from "../images/logo.png"
export default function App_navbar() {

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    border: "1px solid #00000021",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "30%"
  }));

  const Icon = styled("Box")(({ theme }) => ({
    color:" #fca605c2",
    display:"flex",
    alignItems:"center",
    gap: "20px"
  }));

  return (

    <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none'}}>
      <StyledToolbar>

        <Typography color={"#f9a406b0"}>
        <Avatar sx={{width: 60, height: 60}} alt="Moe" src="https://img.freepik.com/free-vector/hand-drawn-join-us-lettering_23-2148948794.jpg?w=740&t=st=1664077213~exp=1664077813~hmac=06a56276e90c71a05ceaf1919307823d95373c5fac03bf05420df3bf153353cf" />
        </Typography>

        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Icon>
          <Badge badgeContent={1} color="error">
            <NotificationsNoneTwoToneIcon/>
          </Badge>
          <Avatar sx={{width: 30, height: 30}} alt="Moe" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=900&t=st=1664076923~exp=1664077523~hmac=fa17a13a423c8b6bffde0339319e35c0b643d486e5ca8e52d03bf325630bb2db" />
        </Icon>

      </StyledToolbar>
    </AppBar>

  );
}