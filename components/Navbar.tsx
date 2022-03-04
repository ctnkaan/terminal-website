import React from "react";
import navbarStyles from "../styles/navbar.module.scss";

function Navbar() {
  return (
    <div id="navigation-bar">
        <nav className={navbarStyles.nav}>
            <ul>
                <li><h3 id="logo">Çetin Kaan Taşkıngenç</h3></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Contract">Contact</a></li>
                <a href="#" id="menu-icon"></a>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
