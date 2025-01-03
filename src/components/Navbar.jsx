import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "../assets/menu_36dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import menuOpenIcon from "../assets/menu_open_36dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg";
import "./Navbar.css";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <nav className="Navbar-component">
      <Link to="/" className="title" onClick={() => closeMobileMenu()}>
        Navbar-Lab
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={menuOpen ? menuOpenIcon : menuIcon}
          className="menuIcon"
          alt="menuIcon"
        />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/services" onClick={() => closeMobileMenu()}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => closeMobileMenu()}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => closeMobileMenu()}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
