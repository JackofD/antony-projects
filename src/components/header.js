import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../scss/header.scss"
import logo from "../images/antony-logo-single.svg"

const Header = ({classes}) => (
  <header className={classes ? classes : ''}>
    <div className="logo-section">
      <img className="logo" src={logo} alt="main logo" />
      <div className="site-name">
        <h2>AK Projects</h2>
      </div>
    </div>
    <nav className="nav-menu">
      <ul>
        <li><a href="/#">Home</a></li>
        <li><a href="/#">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  classes: PropTypes.string,
}

export default Header
