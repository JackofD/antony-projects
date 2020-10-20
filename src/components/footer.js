import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../scss/footer.scss"

const Footer = () => (
  <footer className="site-footer background-brick background-brick-large">
    <section id="contact" className="contact-us">
      <h2 className="background-brick background-brick-light">Contact us</h2>
      <div>
        <ul>
          <li><a href="#/">Email: anytonykanyongo@gmail.com</a></li>
          <li><a href="#/">Whatsapp: 083 558 8524</a></li>
          <li><a href="#/">Social: Facebook</a></li>
        </ul>
      </div>
    </section>
    <hr />
    <section>
      AK Projects Copyright © {new Date().getFullYear()}
    </section>
  </footer>
)

export default Footer
