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

  render() {
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
        <div className="workout">
          <h3>{this.formatter.format(new Date(workout.datetimeCompleted))} - {new Date(workout.datetimeCompleted).toLocaleTimeString()}</h3>
          <table className="workout-table">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Set Number</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>TotalWeight</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (<div>Loading exercises...</div>)
    }
  }

}

export default Workout;