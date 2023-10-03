import React from "react";
import { useParams } from "react-router-dom";
import { exerciseData } from "../Data";

function ExercisePage() {
  const { muscleGroup, id } = useParams();
  const muscleGroupData = exerciseData[muscleGroup];
  
  if (!muscleGroupData) {
    // Handle the case when the muscle group is not found
    return <div>Muscle group not found.</div>;
  }

  const exercise = muscleGroupData.find((ex) => ex.id === parseInt(id));

  if (!exercise) {
    // Handle the case when the exercise is not found
    return <div>Exercise not found.</div>;
  }
 
  return (
    <section id="exercise">
      <div className="row">
        <div className="exercise__border">
          <div className="exercise__wrapper">
            <div className="exercise__video--wrapper">
              <iframe
                className="exercise__video"
                src={exercise.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="exercise__info">
              <h2 className="exercise__trainer">
                Trainer: {exercise.trainer} 
              </h2>
              <h2 className="exercise__description">
                Description: {exercise.description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExercisePage;
