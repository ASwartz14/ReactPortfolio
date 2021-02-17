import React from "react";
import { Link, useLocation } from "react-router-dom";

const styles = {
  navbarBrand: {
    padding: 10,
    backgroundColor: "#d8b2ee",
    fontWeight: "bold",
    fontSize: "large",
    color: "white",
    fontFamily: "'Fjalla One'",
  },
  font: {
    color: "white",
    fontFamily: "Fjalla One",
  },
};
function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" style={styles.navbarBrand}>
          Amber Swartz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo01"
          style={styles.font}
        >
          <ul className="nav justify-content-end navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={
                  location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
