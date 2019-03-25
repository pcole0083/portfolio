import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-12">
                <section className="menu">
                  <ul className="menu-list">
                    <li><Link to="/" className="navbar-item text-center">Home</Link></li>
                    <li><Link className="navbar-item text-center" to="/about">About</Link></li>
                    <li><Link className="navbar-item text-center" to="/contact">Contact</Link></li>
                    {/*<li>
                      <a
                        className="navbar-item text-right"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>*/}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
