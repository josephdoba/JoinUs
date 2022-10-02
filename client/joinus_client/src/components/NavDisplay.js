import {
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const settings = ["Events", "Settings", "Logout"];

export default function NavDisplay(props) {
  const {
    user,
    handleOpenUserMenu,
    anchorElUser,
    handleCloseUserMenu,
    handleLogout,
    handleClickOpen,
  } = props;

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
            <MenuItem
              key={setting}
              onClick={
                setting === "Logout" ? handleLogout : handleCloseUserMenu
              }
            >
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
        variant="outlined"
        aria-label="Disabled elevation buttons"
      >
        <Button onClick={handleClickOpen}>Log in</Button>
        <Button onClick={() => {}}>Sign Up</Button>
      </ButtonGroup>
    </Box>
  );
}
