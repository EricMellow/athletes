import Workouts from "../data/workouts.json";

export default function getWorkout(workoutId: number) {
    return Workouts.find(
        (workout: TrainHeroic.Workout) => workout.id === workoutId
    );
}
