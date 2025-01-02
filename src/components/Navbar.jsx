import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Navbar-Lab
      </Link>
      <ul>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
