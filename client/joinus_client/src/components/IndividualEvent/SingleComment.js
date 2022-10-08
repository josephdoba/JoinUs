import { Box, Button } from '@mui/material';
import React from 'react';
import useUserEvents from '../../hooks/useUserEvents';
import ClearIcon from '@mui/icons-material/Clear';


export default function SingleComment(props) {
  const { name, message, userID, user_id, commentID, reload, setReload } = props;
  const { userDeleteComment } = useUserEvents();
  async function handleDeleteComment(e) {
    e.preventDefault()
    const dataObj = {
      comment_id: commentID
    }
    await userDeleteComment(dataObj)
    setReload(reload + 1)
  }

  return (
    <Box>
      {userID === user_id ?
        <Box sx={{
          display: "flex",
          flexDirection: 'row',
          alignItems: "center",

        }}>
          <Button
            onClick={handleDeleteComment}
          >
            <ClearIcon />
          </Button>
          <Box>
            Me: {message}
          </Box>
        </Box> :
        <Box>{name}: {message}</Box>}
    </Box>
  )
};