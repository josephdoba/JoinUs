import { Button, ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";

export default function NavDisplayLogin(props) {
  const { handleClickOpen } = props;

  return (
    <Box  sx={{ flexGrow: 0  }}>
      <Button variant="contained" size="small" onClick={handleClickOpen}>Log in</Button>
      <Button variant="contained" size="small" onClick={() => { }}>Sign Up</Button>
    </Box>
  );
}
