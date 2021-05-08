import React from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "8px solid #ad020a",
        }}
        className="red lighten-1"
      >
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" id="zaxximo-logo">
            {" "}
            Zaxximo
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;
