import getExercises from "./getExercises";

jest.mock("../data/exercises.json", () => [
    {
        id: 1,
        title: "Bench Press",
    },
]);

describe("The getExercises function", () => {
    test("returns an array of exercises", async () => {
        const exercises = await getExercises();

        expect(exercises).toHaveLength(1);
    });
});
