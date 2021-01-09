import Workouts from "../data/workouts.json";

export default function getWorkoutsForUser(userId: number) {
    return Workouts.filter(
        (workout: TrainHeroic.Workout) => workout.userId === userId
    );
}
