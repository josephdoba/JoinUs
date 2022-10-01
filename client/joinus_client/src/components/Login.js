import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Login(props) {
  const { open, setOpen } = props;
  const [userID, setUserID] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userID);
    // navigate("/user");
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log In!</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              name="userID"
              margin="dense"
              id="email"
              type="text"
              label="Email Address"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="error">
            Cancel
          </Button>
          <Button onClick={handleClose}>Log in</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
