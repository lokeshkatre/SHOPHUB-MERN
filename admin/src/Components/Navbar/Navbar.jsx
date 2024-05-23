import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <div className="nav-logo-text">
          <h1>SHOPHUB</h1>
          <p>Admin Pannel</p>
        </div>
      </div>
      <img className="nav-user-icon" src={user_icon} alt="" />
    </div>
  )
}

export default Navbar
