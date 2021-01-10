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
    if (this.state.exercises[0].id !== 0) {
      let { workout } = this.props;
      let tableRows = workout.blocks.map((block, i) => {
        let sets = block.sets.map((set, ii) => {
          return (
            <tr key={block.exerciseId + ii}>
              <td>{this.state.exercises[i]!.title}</td>
              <td>{ii + 1}</td>
              <td>{set.reps}</td>
              <td>{set.weight || 0}</td>
              <td>{set.reps * (set.weight || 0)}</td>
            </tr>
          )
        })
        return sets
      })
  return (
    <div className="workout-container">
      I'm a workout
    </div>
  );
}
  }

}

export default Workout;