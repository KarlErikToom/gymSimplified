import React, { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <>
      <nav>
        <div className="nav__wrapper">
          <div className="nav__left">
            <button className="menu__btn" >
              <FontAwesomeIcon
                className="menu__btn--img"
                icon="fa-solid fa-bars"
              />
            </button>
            <img src={logo} alt="" className="nav__logo" />
          </div>
          <div className="nav__buttons">
            <button className="btn">Sign up</button>
            <button className="btn">Log in</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
