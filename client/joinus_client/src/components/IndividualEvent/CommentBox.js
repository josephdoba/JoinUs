import React, { useEffect, useState } from "react";
import './commentBox.scss';
import { Box, Button, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function CommentBox(props) {

  const { comments } = props;

  const [message, setMessage] = useState('')

  const Submit = (e) => {
    e.preventDefault();
    setMessage('')
  }


  return (
    <div className="outer-container">
      <h2 className="header-comment">Leave a comment!</h2>
      <div className="comment-container">
        <div className="message">Kyler: Whats up guys hows it hanging?</div>
        <form className="comment-form" autoComplete="off" onSubmit={Submit}>
          <input size='large' type='text' value={message} onChange={(e) => setMessage(e.target.value)} className="comment-input" id="comment"></input>
          <Button type="submit"  style={{position: 'relative', top: '50%'}} variant='contained' endIcon={<SendIcon />} size='small'>Add comment</Button>
        </form>
      </div>
    </div>
  )
}