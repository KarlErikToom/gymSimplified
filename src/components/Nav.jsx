import React, { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { exerciseData as allExerciseData } from "../Data";

function Nav() {
  const sideBarRef = useRef(null);
  function toggleSideBar() {
    const sideElement = sideBarRef.current;
    if (sideElement) {
      sideElement.classList.toggle("side--visible");
    }
  }
  const [exercises, setExercises] = useState(allExerciseData);
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
              {exercises.Chest.map((exercise) => (
                <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Shoulders">
              {exercises.Shoulders.map((exercise) =>(
                <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Biceps">
              {exercises.Biceps.map((exercise) =>(
                <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Triceps">
              {exercises.Triceps.map((exercise) =>(
                <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Back">
              {exercises.Back.map((exercise) =>(
                <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Quads">
              {exercises.Quads.map((exercise) =>(
                <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Hamstring">
              {exercises.Hamstrings.map((exercise) =>(
                <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
              ))}
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
