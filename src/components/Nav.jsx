import React from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <>
      <nav>
        <div className="nav__wrapper">
          <div className="nav__left">
            <button className="menu__btn">
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
      <aside className="sidebar__wrapper">
        <div className="aside">
          <div className="sidebar__submenu">
            <div className="sidebar__submenu--wrapper">
              <ul className="sidebar__muscle">Chest
                <li className="sidebar__muscle--exercise">BenchPress</li>
                <li className="sidebar__muscle--exercise">cable flys</li>
                <li className="sidebar__muscle--exercise"> incline dumbbell press</li>
              </ul>
              <ul className="sidebar__muscle">Shoulders
                <li className="sidebar__muscle--exercise">BenchPress</li>
                <li className="sidebar__muscle--exercise">cable flys</li>
                <li className="sidebar__muscle--exercise"> incline dumbbell press</li>
              </ul>
              <ul className="sidebar__muscle">Triceps
                <li className="sidebar__muscle--exercise">BenchPress</li>
                <li className="sidebar__muscle--exercise">cable flys</li>
                <li className="sidebar__muscle--exercise"> incline dumbbell press</li>
              </ul>
              <ul className="sidebar__muscle">Biceps
                <li className="sidebar__muscle--exercise">BenchPress</li>
                <li className="sidebar__muscle--exercise">cable flys</li>
                <li className="sidebar__muscle--exercise"> incline dumbbell press</li>
              </ul>
              <ul className="sidebar__muscle">Back
                <li className="sidebar__muscle--exercise">BenchPress</li>
                <li className="sidebar__muscle--exercise">cable flys</li>
                <li className="sidebar__muscle--exercise"> incline dumbbell press</li>
              </ul>
              <ul className="sidebar__muscle">Quads
                <li className="sidebar__muscle--exercise">BenchPress</li>
                <li className="sidebar__muscle--exercise">cable flys</li>
                <li className="sidebar__muscle--exercise"> incline dumbbell press</li>
              </ul>
              <ul className="sidebar__muscle">Hamstrings
                <li className="sidebar__muscle--exercise">BenchPress</li>
                <li className="sidebar__muscle--exercise">cable flys</li>
                <li className="sidebar__muscle--exercise"> incline dumbbell press</li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Nav;
