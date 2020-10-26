import React from "react"

import "../scss/footer.scss"

const Footer = () => (
  <footer className="site-footer background-brick background-brick-large">
    <section id="contact" className="contact-us">
      <h2 className="heading background-brick background-brick-light">Contact us @</h2>
      <div>
        <ul>
          <li><a href="mailto:anytonykanyongo@gmail.com">anytonykanyongo@gmail.com</a></li>
          <li><a href="tel:083-558-8524">083 558 8524</a></li>
          {/* <li>Social: <a href="#/">Facebook</a></li> */}
          <li>Area: Western Cape, West Coast and surroundings</li>
        </ul>
      </div>
    </section>
    <hr />
    <section className="copyright">
      AK Projects Copyright © {new Date().getFullYear()}
    </section>
  </footer>
)

export default Footer
