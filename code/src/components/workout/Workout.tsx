import "./Workout.scss";
import getExercise from "../../api/getExercise";
import React, { Component } from 'react';

type WorkoutProps = { workout: TrainHeroic.Workout };
type WorkoutState = {
  exercises: Array<any>
}

class Workout extends Component<WorkoutProps, WorkoutState> {
  state: WorkoutState = {
    exercises: [{id: 0, title: ''}],
  };

  return (
    <div className="workout-container">
      I'm a workout
    </div>
  );
}
  }

}

export default Workout;