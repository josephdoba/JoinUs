import React, { useState, useEffect, useRef } from "react";
import './chat.scss';
import io from 'socket.io-client';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom' 

function Chat() {
	const [ state, setState ] = useState({ message: "", name: "" })
	const [ chat, setChat ] = useState([])

	const socketRef = useRef()

	const navigate = useNavigate();

	async function homepageSubmit () {
		await wait(250)
		navigate('/')
	}

	async function submitHandler () {
		await wait(250)
    navigate('/user/homepage')
  }

	useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:8080")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

	function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span className="message-sent">{message}</span>
				</h3>
			</div>
		))
	}

	return (
    <div className="page">
			<Button variant="outlined" onClick={submitHandler} className='chat-button'>Back to users</Button>
			<Button variant="outlined" onClick={homepageSubmit} className='chat-button2'>Homepage</Button>
      <div className="card">
        <form onSubmit={onMessageSubmit} className='form-chat'>
          <h1>Messenger</h1>
          <div className="name-field">
            <TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
          </div>
          <div>
            <TextField
              name="message"
              onChange={(e) => onTextChange(e)}
              value={state.message}
              id="outlined-multiline-static"
              variant="outlined"
              label="Message"
            />
          </div>
          <button className="send-message">Send Message</button>
        </form>
        <div className="render-chat">
          <h1>Chat Log</h1>
          {renderChat()}
        </div>
      </div>
    </div>
	)
}

export default Chat