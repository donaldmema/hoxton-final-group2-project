import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

type Props = {
  currentUser: any;
  signOut: () => void;
};

function Header({ currentUser, signOut }: Props) {
  return (
    <div className="home-page-header">
      <li className="logo">
       <a href="/homepage"> <img src={logo} width="200px" alt="indeed-logo" /> </a>
      </li>
      {currentUser === null ? (
          <>
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
      </>
      ) : (
        <div>
          <li className="find-job-navbar-signedin-three">
              {/* {currentUser.name} */}
            </li>
            <button
              onClick={() => {
                signOut();
                localStorage.removeItem("token");
              }}
            >
              Sign out
            </button>
        </div>
         )}
    </div>
  );
}

export default Header;
