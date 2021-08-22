import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.about}
                </a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`} >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={props.toggleModeBlue}
              />
              <label className="form-check-label" style={{marginRight:"10px"}} htmlFor="flexSwitchCheckChecked">
                Enable Blue Mode
              </label>
            </div>
            <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`} >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={props.toggleModeYellow}
              />
              <label className="form-check-label" style={{marginRight:"10px"}} htmlFor="flexSwitchCheckChecked">
                Enable Yellow Mode
              </label>
            </div>
            <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`} >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={props.toggleModeDarkBlue}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                Enable Dark Blue Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  about: "Set About here",
};
