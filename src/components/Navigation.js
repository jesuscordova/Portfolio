import React from "react";
import "./Navigation.scss";
import PersonIcon from "@material-ui/icons/Person";
import { HashLink as Link } from "react-router-hash-link";
function Navigation() {
  return (
    <div className="header-section">
      <header>
        <Link to="/">
          <p>logo</p>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/#projects">
                <a href="#projects">Projects</a>
              </Link>
            </li>
            <li>
              <Link to="/Blog">
                <a href="#">Blogs</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/Blog">
          <button>
            <PersonIcon className="icon" fontSize="large" />
          </button>
        </Link>
      </header>
    </div>
  );
}

export default Navigation;
