import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import logo from '../../img/logo.png'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.img_nav}>
        <img src={logo} alt='logo My Job'/>
        <nav className='sidebar'>
          <Link to="/">Home</Link>
          <Link to="/job">Job</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>

      <button className={styles.sing_up}>Sign Up</button>
    </div>
  )
}

export default Header