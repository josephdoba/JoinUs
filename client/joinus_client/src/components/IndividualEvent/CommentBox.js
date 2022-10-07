import React, { useEffect, useState } from "react";
import './commentBox.scss';
import { Box, Button, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import SingleComment from "./SingleComment";
import useUserEvents from "../../api/useUserEvents";
import { checkIfUserJoinedSingleEvent } from "../../helpers/event_selectors";

export default function CommentBox(props) {

  const { userAddComment } = useUserEvents();

  const { comments, event, user, reload, setReload, joinedEvents } = props;
  const [message, setMessage] = useState('')
  const Submit = (e) => {
    e.preventDefault();
    setMessage('')
  }

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
            commentID={e.id}
            reload={reload}
            setReload={setReload}
          />
        );
    });
  };

  let showComments = displayComments(comments);

  async function handleAddComment(e) {
    if (e.target[0].value && checkIfUserJoinedSingleEvent(user.id, event.id, joinedEvents)) {
      e.preventDefault();
    setMessage('')
    const message = e.target[0].value

    const dataObj = {
      user_id: user.id,
      event_id: event.id,
      name: user.name,
      message: message
    }

    await userAddComment(dataObj);
    setReload(reload + 1)
    } else if (!checkIfUserJoinedSingleEvent(user.id, event.id, joinedEvents)){
      e.preventDefault()
    alert('You must join the event to comment!')
    return
    } else {
      e.preventDefault()
      return
    }
  };

  return (
    <div className="outer-container">
      <h2 className="header-comment">Leave a comment!</h2>
      <div className="comment-container">
        {showComments}
        <form className="comment-form" autoComplete="off" onSubmit={handleAddComment}>
          <input size='large' type='text' value={message} onChange={(e) => setMessage(e.target.value)} className="comment-input" id="comment"></input>
          <Button type="submit"  style={{position: 'relative', top: '50%'}} variant='contained' endIcon={<SendIcon />} size='small'>Add comment</Button>
        </form>
      </div>
    </div>
  )
}