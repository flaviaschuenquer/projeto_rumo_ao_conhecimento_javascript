import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import logo from '../../assets/images/logobrancopq.svg'
import api from '../../Services/api'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="layout">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="list">
          <li>
            <Link to="/home">
              <h4>Home</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
