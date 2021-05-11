import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

function SearchBar() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  });

  return (
    <div>
      <nav
        style={{
          borderBottom: "8px solid #ece8ff",
        }}
      >
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" id="zaxximo-logo">
            {" "}
            Zaxximo
          </Link>
          <a
            href="#"
            data-target="mobile-demo"
            class="sidenav-trigger"
            style={{ float: "right" }}
          >
            <i class="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link className="navlinks" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="navlinks" to="/login">
                Logout
              </Link>
            </li>
            <li>
              <Link className="navlinks" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="navlinks" to="/login">
                Login
              </Link>
            </li>
          </ul>

          <ul class="sidenav" id="mobile-demo" style={{ float: "right" }}>
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
