import React from "react";
import './navbar.scss'
import logo from '../images/logo.png'
import ReactSwitch from 'react-switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Navbar = function(props) {

  const loginHandler = (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('active')
    }
  };

  return (
    <div>
      <nav className='nav' id={props.theme}>
        <main className='main-navbar'>
        <img alt='LOGO' src={logo} className="logo"/>
        <div className='login'>
          <div className="dropdown" data-dropdown>
          <button className="but" id={props.theme} data-dropdown-button onClick={loginHandler}>Login</button>|
          <div className='dropdown-menu' id={props.theme}>
            <form action="submit">
              <label htmlFor="email" id={props.theme}>enter your email address:</label>
              <input type='text' id={props.theme} name="email" className="input" placeholder="email address..."></input>
              <label htmlFor='password' id={props.theme}>Enter your password:</label>
              <input type='text' id={props.theme} name='password' className="input" placeholder="password..."></input>
              <button type="submit" className="login-button">Submit</button>
            </form>
          </div>
          </div>
        </div>
        <div className='signup'><button className="but" id={props.theme}>Signup</button></div>
        <ReactSwitch className='toggle-switch' onChange={props.toggleTheme} checked={props.theme === 'dark'}/>
        <FontAwesomeIcon icon={faUser} className='user-logo'/>
        </main>
      </nav>
    </div>
  )
};

export default Navbar;