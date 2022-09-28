import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './navbar.scss'
import logo from '../images/logo.png'
import ReactSwitch from 'react-switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { reactLocalStorage } from 'reactjs-localstorage'
const Navbar = function(props) {
  const navigate = useNavigate();
  const loginHandler = (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('active')
    }
  };

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

  const checkForUser = () => {
    const check = reactLocalStorage.getObject('userr')
    if (!check.email) {
      props.setSuccess(false)
    } else {
      props.setSuccess(true)
      props.setUser(reactLocalStorage.getObject('userr'))
    }
  }

  useEffect(() => {
    checkForUser()
  }, [])

  async function handleSubmit(event) {
    reactLocalStorage.setObject('userr', {id: 2, email: event.target[0].value, password: event.target[1].value})
    navigate('/user/homepage')
  }

  async function logout() {
    reactLocalStorage.remove('userr')
    props.setSuccess(false)
    await wait(500)
    navigate('/')
  }

  async function submit() {
    await wait(250)
    navigate('/')
  }


  return (
    <div>
      <nav className='nav' id={props.theme}>
        <main className='main-navbar'>
        <img alt='LOGO' src={logo} className="logo" onClick={submit}/>
        {props.success ? <div><div className="logged-in">Logged in as:  {props.user.email}</div> <div className="logout" onClick={logout}>Logout</div></div> : 
        <div className='login'>
          <div className="dropdown" data-dropdown>
          <button className="but" id={props.theme} data-dropdown-button onClick={loginHandler}>Login</button>|
          <div className='dropdown-menu' id={props.theme}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" id={props.theme}>enter your email address:</label>
              <input type='text' id={props.theme} name="email" className="input" placeholder="email address..."></input>
              <label htmlFor='password' id={props.theme}>Enter your password:</label>
              <input type='password' id={props.theme} name='password' className="input" placeholder="password..."></input>
              <button className="login-button">Submit</button>
            </form>
          </div>
          </div>
        </div>}
        {props.success === false ? <div className='signup'><button className="but" id={props.theme}>Signup</button></div> : null }
        <ReactSwitch className='toggle-switch' onChange={props.toggleTheme} checked={props.theme === 'dark'}/>
        <FontAwesomeIcon icon={faUser} className='user-logo'/>
        </main>
      </nav>
    </div>
  )
};

export default Navbar;
