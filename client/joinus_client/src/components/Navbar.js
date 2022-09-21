import React from "react";
import './navbar.scss'
import logo from '../images/logo.png'
import ReactSwitch from 'react-switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = function(props) {
  return (
    <div>
      <nav className='nav' id={props.theme}>
        <main className='main-navbar'>
        <img alt='LOGO' src={logo} className="logo"/>
        <div className='login'><button className="but" id={props.theme}>Login</button>|</div>
        <div className='signup'><button className="but" id={props.theme}>Signup</button></div>
        <ReactSwitch className='toggle-switch' onChange={props.toggleTheme} checked={props.theme === 'dark'}/>
        <FontAwesomeIcon icon={faUser} className='user-logo'/>
        </main>
      </nav>
    </div>
  )
}

export default Navbar