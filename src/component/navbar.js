import { NavLink } from "react-router-dom";
import logo_image from "../asset/logo_image.jpg";

import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <img className="logoimage" src={logo_image} alt="logo" />

      <div className="navlink-container">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active navlink hovernavlink" : "navlink hovernavlink"
          }
          to="/about"
        >
          About us
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active navlink hovernavlink" : "navlink hovernavlink"
          }
          to="/services"
        >
          Services <FiChevronDown />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active navlink hovernavlink" : "navlink hovernavlink"
          }
        >
          Hiring Approach
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active navlink hovernavlink" : "navlink hovernavlink"
          }
        >
          Clients <FiChevronDown />
        </NavLink>
        <button className="navbar-btn">Contact Us</button>
      </div>
    </div>
  );
}
