import React, { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav({ setIsSidebarOpen }) {
  function toggleSidebar() {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  }
  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="nav__logo--btn">
            <button onClick={toggleSidebar} className="menu__btn">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
            <img src={logo} alt="" className="nav__logo" />
          </div>
          <div className="nav__buttons">
            <button className="btn">Login</button>
            <button className="btn">Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
