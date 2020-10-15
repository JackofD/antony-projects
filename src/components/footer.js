import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../scss/footer.scss"

const Footer = () => (
  <footer>
    <section id="contact">
      Contact information
    </section>
    <section>
      Copyright © {new Date().getFullYear()}
    </section>
  </footer>
)

Footer.propTypes = {
  
}

Footer.defaultProps = {
  
}

export default Footer
