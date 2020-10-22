import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../scss/header.scss"
import logo from "../images/antony-logo-single.svg"

const Header = ({classes}) => (
  <header className={classes ? classes : ''}>
    <div className="logo-section">
      <div className="site-name">
        <h2>AK Projects</h2>
      </div>
      <img className="logo" src={logo} alt="main logo" />
    </div>
    <nav className="nav-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  classes: PropTypes.string,
}

export default Header
