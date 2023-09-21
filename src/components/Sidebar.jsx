import React from "react";
import { Sidebar as Side, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { exerciseData } from "../Data";
import { useState } from "react";

function Sidebar({ isOpen }) {
  const [exercise, setExercise] = useState(exerciseData);
  return (
    <Side className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <Menu>
        <div className="workouts">
          <div className="workouts__wrapper">
            <div className="workouts__label">
              <span>Muscle Groups</span>
            </div>
            <SubMenu label="Chest">
              <div className="workouts__free">
                <span className="workouts__span">Free</span>
                {exercise.Chest.filter(
                  (exercise) => exercise.access === "free"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
              <div className="workouts__user">
                <span className="workouts__span">Users only</span>
                {exercise.Chest.filter(
                  (exercise) => exercise.access === "user"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
            </SubMenu>
            <SubMenu label="Back">
              <div className="workouts__free">
                <span className="workouts__span">Free</span>
                {exercise.Back.filter(
                  (exercise) => exercise.access === "free"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
              <div className="workouts__user">
                <span className="workouts__span">Users only</span>
                {exercise.Back.filter(
                  (exercise) => exercise.access === "user"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
            </SubMenu>
            <SubMenu label="Shoulders">
              <div className="workouts__free">
                <span className="workouts__span">Free</span>
                {exercise.Shoulders.filter(
                  (exercise) => exercise.access === "free"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
              <div className="workouts__user">
                <span className="workouts__span">Users only</span>
                {exercise.Shoulders.filter(
                  (exercise) => exercise.access === "user"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
            </SubMenu>
            <SubMenu label="Biceps">
              <div className="workouts__free">
                <span className="workouts__span">Free</span>
                {exercise.Biceps.filter(
                  (exercise) => exercise.access === "free"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
              <div className="workouts__user">
                <span className="workouts__span">Users only</span>
                {exercise.Biceps.filter(
                  (exercise) => exercise.access === "user"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
            </SubMenu>
            <SubMenu label="Triceps">
              <div className="workouts__free">
                <span className="workouts__span">Free</span>
                {exercise.Triceps.filter(
                  (exercise) => exercise.access === "free"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
              <div className="workouts__user">
                <span className="workouts__span">Users only</span>
                {exercise.Triceps.filter(
                  (exercise) => exercise.access === "user"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
            </SubMenu>
            <SubMenu label="Quads">
              <div className="workouts__free">
                <span className="workouts__span">Free</span>
                {exercise.Quads.filter(
                  (exercise) => exercise.access === "free"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
              <div className="workouts__user">
                <span className="workouts__span">Users only</span>
                {exercise.Quads.filter(
                  (exercise) => exercise.access === "user"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
            </SubMenu>
            <SubMenu label="Hamstrings">
              <div className="workouts__free">
                <span className="workouts__span">Free</span>
                {exercise.Hamstrings.filter(
                  (exercise) => exercise.access === "free"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
              <div className="workouts__user">
                <span className="workouts__span">Users only</span>
                {exercise.Hamstrings.filter(
                  (exercise) => exercise.access === "user"
                ).map((exercise) => (
                  <MenuItem key={exercise.id}>{exercise.name}</MenuItem>
                ))}
              </div>
            </SubMenu>
          </div>
        </div>
      </Menu>
    </Side>
  );
}

export default Sidebar;
