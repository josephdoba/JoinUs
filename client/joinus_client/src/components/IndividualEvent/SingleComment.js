import React from 'react';
import useUserEvents from '../../hooks/useUserEvents';


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
  <div>
  { userID === user_id ? <div className="message">Me: {message} <button className='DELETE' onClick={handleDeleteComment}>Delete</button></div> : <div className="message">{name}: {message}</div>}
  </div>
)
};