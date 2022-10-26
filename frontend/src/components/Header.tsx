import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="home-page-header">
      <li className="logo">
        <img src={logo} width="200px" alt="indeed-logo" />
      </li>
      <ul className="header-btn">
        <li className="signup">
          <button>
            <NavLink to="/signup">Sign up</NavLink>
          </button>
        </li>
        <li className="signin">
          <button>
            {" "}
            <NavLink to="/signin">Sign in</NavLink>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
