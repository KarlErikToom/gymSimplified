import React, { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function Nav() {
  const sideBarRef = useRef(null);
  function toggleSideBar() {
    const sideElement = sideBarRef.current;
    if (sideElement) {
      sideElement.classList.toggle("side--visible");
    }
  }
  return (
    <>
      <nav>
        <div className="nav__wrapper">
          <div className="nav__left">
            <button className="menu__btn" onClick={toggleSideBar}>
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
      <Sidebar className="sidebar" ref={sideBarRef}>
        <Menu>
          <div className="exercise__menu">
            <span>Exercises per muscle group</span>
            <SubMenu label="Chest">
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
            </SubMenu>
            <SubMenu label="Shoulders">
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
            </SubMenu>
            <SubMenu label="Biceps">
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
            </SubMenu>
            <SubMenu label="Triceps">
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
            </SubMenu>
            <SubMenu label="Back">
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
            </SubMenu>
            <SubMenu label="Quads">
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
            </SubMenu>
            <SubMenu label="Hamstring">
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
              <MenuItem> Bench Press </MenuItem>
              <MenuItem> cable flyes </MenuItem>
              <MenuItem> Incline Dumbbell Press </MenuItem>
            </SubMenu>
          </div>
          <div className="exercise__menu">
            <span>NUTRITION</span>
            <MenuItem>Foods for Bulking</MenuItem>
            <MenuItem>Foods for Cutting</MenuItem>
          </div>
        </Menu>
      </Sidebar>
      ;
    </>
  );
}

export default Nav;
