import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer style={{
    marginTop: `2rem`
  }}>
    Copyright © {new Date().getFullYear()}
  </footer>
)

Footer.propTypes = {
  
}

Footer.defaultProps = {
  
}

export default Footer
