import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <header className='header'>
        <div className='logo'>
        <Link to="/">Are Jobs</Link>
        </div>
        <ul>
            <li>
                <Link to="/login">
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to="/register">
                    <FaUser /> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Navbar