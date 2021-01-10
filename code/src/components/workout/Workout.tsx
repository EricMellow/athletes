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

  async componentDidMount() {
    let exercises = await this.getExercises();
    this.setState({
      exercises: exercises
    })
  }

  formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  getExercises = () => {
   let exercises = this.props.workout.blocks.map(async block => await getExercise(block.exerciseId))
   return Promise.all(exercises)
  }
  return (
    <div className="workout-container">
      I'm a workout
    </div>
  );
}
  }

}

export default Workout;