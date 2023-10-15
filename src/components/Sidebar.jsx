import React, { useEffect, useState } from "react";
import { Sidebar as Side, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { exerciseData } from "../Data";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Sidebar({ isOpen, setIsOpen }) {
  const [authUser, setAuthUser] = useState(null);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  return (
    <Side
      className={`sidebar ${isOpen ? "open" : "closed"}`}
      backgroundColor="#161616"
      style={{ borderColor: "#161616" }}
    >
      <Menu className="menu">
        <div className="workouts">
          <div className="workouts__wrapper">
            <div className="workouts__label">
              <span>Muscle Groups</span>
            </div>
            {Object.entries(exerciseData).map(([muscleGroup, exercises]) => (
              <SubMenu label={muscleGroup} key={muscleGroup}>
                <div className="menuitem__wrapper">
                  <span className="menuitem__span">Free Access</span>
                  {exercises
                    .filter((exercise) => exercise.access === "free")
                    .map((exercise) => (
                      <MenuItem
                        key={exercise.id}
                        component={
                          <Link
                            to={`/${muscleGroup}/${exercise.id}`}
                            onClick={closeSidebar}
                          />
                        }
                      >
                        {exercise.name}
                      </MenuItem>
                    ))}
                </div>
                <div className="menuitem__wrapper">
                  <span className="menuitem__span">Users only</span>
                  {exercises
                    .filter((exercise) => exercise.access === "user")
                    .map((exercise) => (
                      <MenuItem
                        key={exercise.id}
                        component={
                          <Link
                            to={`/${muscleGroup}/${exercise.id}`}
                            onClick={closeSidebar}
                          />
                        }
                        disabled={!authUser}
                      >
                        {exercise.name}
                      </MenuItem>
                    ))}
                </div>
              </SubMenu>
            ))}
          </div>
        </div>
      </Menu>
    </Side>
  );
}

export default Sidebar;
