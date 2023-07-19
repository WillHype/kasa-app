import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/Logo.svg";
import "./_index.scss"

function Header() {
  const [activePage, setActivePage] = useState("/");

  return (
    <header className="header">
      <NavLink to="/">
            <img src={logoHeader} alt="Logo" className="headerLogo"/>
        </NavLink>
      <nav className="nav__links">
        <li className={`nav__link--item ${activePage === "/" ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setActivePage("/")}>
            Accueil
          </NavLink>
        </li>
        <li className={`nav__link--item ${activePage === "/about" ? "active" : ""}`}>
          <NavLink to="/about" onClick={() => setActivePage("/about")}>
            A propos
          </NavLink>
        </li>
      </nav>
    </header>
  );
}

export default Header;
