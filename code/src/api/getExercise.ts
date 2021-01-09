import Exercises from "../data/exercises.json";

export default async function getExercise(exerciseId: number) {
    return Exercises.find(
        (exercise: TrainHeroic.Exercise) => (exercise.id = exerciseId)
    );
}
