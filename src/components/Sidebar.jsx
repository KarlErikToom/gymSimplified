import React from "react";
import { Sidebar as Side, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { exerciseData } from "../Data";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <Side className={`sidebar ${isOpen ? "open" : "closed"}`}>
    <Menu>
      <div className="workouts">
        <div className="workouts__wrapper">
          <div className="workouts__label">
            <span>Muscle Groups</span>
          </div>
          {Object.entries(exerciseData).map(([muscleGroup, exercises]) => (
            <SubMenu label={muscleGroup} key={muscleGroup}>
              <MenuItem disabled>Free Access</MenuItem>
              {exercises
                .filter((exercise) => exercise.access === "free")
                .map((exercise) => (
                  <MenuItem
                    key={exercise.id}
                    component={<Link to={`/${muscleGroup}/${exercise.id}`} />}
                  >
                    {exercise.name}
                  </MenuItem>
                ))}
              <MenuItem disabled>User Access</MenuItem>
              {exercises
                .filter((exercise) => exercise.access === "user")
                .map((exercise) => (
                  <MenuItem
                    key={exercise.id}
                    component={<Link to={`/${muscleGroup}/${exercise.id}`} />}
                  >
                    {exercise.name}
                  </MenuItem>
                ))}
            </SubMenu>
          ))}
        </div>
      </div>
    </Menu>
  </Side>
  );
}

export default Sidebar;
