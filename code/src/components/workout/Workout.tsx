import "./Workout.scss"

type WorkoutProps = { workout: TrainHeroic.Workout };

export default function Workout({ workout }: WorkoutProps) {
  console.log(workout)

  return (
    <div className="workout-container">
      I'm a workout
    </div>
  );
}