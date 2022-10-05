import { Button, ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";

export default function NavDisplayLogin(props) {
  const { handleClickOpen } = props;

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
