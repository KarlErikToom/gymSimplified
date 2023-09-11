import React, { useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const [exerciseVisibility, setExerciseVisibility] = useState({
    Chest: false,
    Shoulders: false,
    Biceps: false,
    Triceps: false,
    Quads: false,
    Hamstrings: false,
    Football: false,
    Basketball: false,
    Soccer: false,
    Meal_Prep: false,
    Cutting: false,
    Bulking: false,
  });

  const toggleExerciseVisibility = (muscle) => {
    setExerciseVisibility((prevState) => ({
      ...prevState,
      [muscle]: !prevState[muscle],
    }));
  };
  const asideRef = useRef(null);
  function toggleAside() {
    const asideElement = asideRef.current;
    if (asideElement) {
      asideElement.classList.toggle("aside--visible");
    }
  }

  return (
    <>
      <nav>
        <div className="nav__wrapper">
          <div className="nav__left">
            <button className="menu__btn" onClick={toggleAside}>
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
      <aside ref={asideRef} className={`sidebar__wrapper`}>
        <div className="aside">
          <div className="sidebar__submenu">
            <div className="sidebar__submenu--wrapper">
              <span className="sidebar__submenu--class">Muscle groups</span>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Chest")}
                >
                  Chest
                </div>
                {exerciseVisibility["Chest"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Shoulders")}
                >
                  Shoulders
                </div>
                {exerciseVisibility["Shoulders"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Triceps")}
                >
                  Triceps
                </div>
                {exerciseVisibility["Triceps"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Biceps")}
                >
                  Biceps
                </div>
                {exerciseVisibility["Biceps"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Quads")}
                >
                  Quads
                </div>
                {exerciseVisibility["Quads"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Hamstrings")}
                >
                  Hamstrings
                </div>
                {exerciseVisibility["Hamstrings"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
            </div>
            <div className="aside__message">
              <div className="aside__message--wrapper">
                <span>Dont forget</span>
                <span>
                  Push yourself each and every workout
                  <FontAwesomeIcon
                    className="rotate"
                    icon="fa-solid fa-dumbbell"
                  />
                </span>
              </div>
            </div>
            <div className="sidebar__submenu--wrapper">
              <span className="sidebar__submenu--class">Sports Specific</span>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Football")}
                >
                  Football
                </div>
                {exerciseVisibility["Football"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">
                        Football ex 1
                      </li>
                      <li className="sidebar__muscle--exercise">
                        Football ex 2
                      </li>
                      <li className="sidebar__muscle--exercise">
                        Football ex 3
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">
                        Football ex 1
                      </li>
                      <li className="sidebar__muscle--exercise">
                        Football ex 2
                      </li>
                      <li className="sidebar__muscle--exercise">
                        Football ex 3
                      </li>
                    </div>
                  </>
                )}
              </ul>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Basketball")}
                >
                  Basketball
                </div>
                {exerciseVisibility["Basketball"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Soccer")}
                >
                  Soccer
                </div>
                {exerciseVisibility["Soccer"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
            </div>
            <div className="sidebar__submenu--wrapper">
              <span className="sidebar__submenu--class">
                Food and Meal Prep
              </span>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Meal_Prep")}
                >
                  How to meal prep
                </div>
                {exerciseVisibility["Meal_Prep"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">Meal prep 1</li>
                      <li className="sidebar__muscle--exercise">Meal prep 1</li>
                      <li className="sidebar__muscle--exercise">Meal prep 1</li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">Meal prep 2</li>
                      <li className="sidebar__muscle--exercise">Meal prep 2</li>
                      <li className="sidebar__muscle--exercise">Meal prep 2</li>
                    </div>
                  </>
                )}
              </ul>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Bulking")}
                >
                  Bulking foods
                </div>
                {exerciseVisibility["Bulking"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
              <ul className="sidebar__muscle">
                <div
                  className="title"
                  onClick={() => toggleExerciseVisibility("Cutting")}
                >
                  Cutting foods
                </div>
                {exerciseVisibility["Cutting"] && (
                  <>
                    <div className="exercise__free">
                      <span className="type">FREE</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                    <div className="exercise__members">
                      <span className="type">Members only</span>
                      <li className="sidebar__muscle--exercise">BenchPress</li>
                      <li className="sidebar__muscle--exercise">cable flys</li>
                      <li className="sidebar__muscle--exercise">
                        incline dumbbell press
                      </li>
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Nav;
