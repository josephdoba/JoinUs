import { Button, ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";

export default function NavDisplayLogin(props) {
  const { handleClickOpen } = props;

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Button onClick={handleClickOpen}>Log in</Button>
      <Button onClick={() => { }}>Sign Up</Button>
    </Box>
  );
}
