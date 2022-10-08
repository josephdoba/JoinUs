import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, Box, Button, TextField } from "@mui/material";

export default function Login(props) {
  const { open, userID, setUserID, handleClose, handleSubmit } = props;

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log In!</DialogTitle>
        <DialogContent>
          <form
            id="login"
            noValidate
            autoComplete="off"
            action=""
            onSubmit={handleSubmit}
          >
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
            <Typography variant="caption">Forgot Password?</Typography>
            <Box sx={{ marginTop: 1 }}>
              <Button onClick={handleClose} variant="error">
                Cancel
              </Button>
              <Button type="submit" onClick={handleClose}>
                Log in
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
