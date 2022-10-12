import React, { useState } from "react";
//import "./commentBox.scss";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SingleComment from "./SingleComment";
import useUserEvents from "../../hooks/useUserEvents";
import { checkIfUserJoinedSingleEvent } from "../../helpers/event_selectors";
import useSharedUser from "../../hooks/useSharedUser";
import useSharedEvent from "../../hooks/useSharedEvent";
import MessageIcon from "@mui/icons-material/Message";
import useSharedReload from "../../hooks/useSharedReload";

export default function CommentBox(props) {
  const { userAddComment } = useUserEvents();

  const { comments, joinedEvents } = props;

  const { user } = useSharedUser();
  const { event } = useSharedEvent();
  const { reload, setReload } = useSharedReload();

  const [message, setMessage] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    setMessage("");
  };

  const commonStyles = {
    bgcolor: "#ffffff59",
    m: 3,
    border: 2,
    width: "70%",
    height: "70%",
  };

  const displayComments = (comment) => {
    const comments = [];

    for (const i of comment) {
      if (i.event_id === event.id) {
        comments.push(i);
      }
    }

    return comments.map((e) => {
      return (
        <SingleComment
          name={e.name}
          message={e.message}
          userID={user.id}
          user_id={e.user_id}
          comment_id={e.id}
        />
      );
    });
  };

  let showComments = displayComments(comments);

  async function handleAddComment(e) {
    if (
      e.target[0].value &&
      checkIfUserJoinedSingleEvent(user.id, event.id, joinedEvents)
    ) {
      e.preventDefault();
      setMessage("");
      const message = e.target[0].value;

      const dataObj = {
        user_id: user.id,
        event_id: event.id,
        name: user.name,
        message: message,
      };

      await userAddComment(dataObj);
      setReload(reload + 1);
    } else if (!checkIfUserJoinedSingleEvent(user.id, event.id, joinedEvents)) {
      e.preventDefault();
      alert("You must join the event to comment!");
      return;
    } else {
      e.preventDefault();
      return;
    }
  }

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Typography>Event Messages</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
            ...commonStyles,
            borderRadius: "12px",
          }}
        >
          {showComments}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: 1,
            m: 1,
            alignItems: "center",
          }}
        >
          <form
            className="comment-form"
            autoComplete="off"
            onSubmit={handleAddComment}
          >
            <TextField
              sx={{ width: "500px" }}
              variant="standard"
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="comment"
              rows={2}
            ></TextField>
            <Button sx={{ height: 55 }} type="submit">
              <Stack
                direction="column"
                alignItems="center"
                justifyContent={"center"}
              >
                <MessageIcon />
              </Stack>
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
