import React from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
            <Link to={"/"}>
            <img src={logo} alt="" className="nav__logo" />
            </Link>
          </div>
          <div className="nav__buttons">
            <button className="btn">Login</button>
            <Link to={"/signup"}>
            <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
