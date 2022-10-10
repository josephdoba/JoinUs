import { Box, Button } from "@mui/material";
import React from "react";
import useUserEvents from "../../hooks/useUserEvents";
import ClearIcon from "@mui/icons-material/Clear";

export default function SingleComment(props) {
  const { name, message, userID, user_id, comment_id } = props;
  const { deleteComment } = useUserEvents();

  return (
    <Box>
      {userID === user_id ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            onClick={(e) => {
              e.preventDefault();
              deleteComment({ comment_id });
            }}
          >
            <ClearIcon />
          </Button>
          <Box>Me: {message}</Box>
        </Box>
      ) : (
        <Box>
          {name}: {message}
        </Box>
      )}
    </Box>
  );
}
