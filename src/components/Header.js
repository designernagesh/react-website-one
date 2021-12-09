import React from "react";
import logo from "../images/mashuptemplate.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
        <nav className="navbar  navbar-fixed-top navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle uarr collapsed" data-toggle="collapse" data-target="#navbar-collapse-uarr">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link className="navbar-brand" to="/" title>
                <img src={logo} className="navbar-logo-img" alt="" />
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse-uarr">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/About"> About</Link></li>
                <li><Link to="/Pricing"> Pricing </Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Components">Components</Link></li>
                <li>
                  <p>
                    <a href="./download.html" className="btn btn-primary navbar-btn" title>Download</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header;