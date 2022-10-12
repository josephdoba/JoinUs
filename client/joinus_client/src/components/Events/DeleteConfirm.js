import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function DeleteConfirm(props) {
  const { confirm, setConfirm, deleteEvent, event_id, owner_id } = props;
  const handleClose = () => setConfirm(false);

  return (
    <div>
      <Modal
        open={confirm}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this Event?
          </Typography>
          <Button
            sx={{ position: "aboslute", left: "20%", bottom: "-10px" }}
            onClick={() => deleteEvent({ event_id, owner_id })}
          >
            Yes
          </Button>
          <Button
            sx={{ position: "aboslute", left: "45%", bottom: "-10px" }}
            onClick={handleClose}
          >
            No
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
