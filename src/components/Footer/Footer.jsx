/* eslint-disable no-unused-vars */
import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Marco Savarino</p>
          </div>
          <div className="col-md-6">
            <ul className="social-icons">
              <li>
                <a href="https://github.com/MarcoSavarin0" target='__blank'>
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/marco-agustín-savarino/" target='__blank'>
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/marcoosavaa/" target='__blank'>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
