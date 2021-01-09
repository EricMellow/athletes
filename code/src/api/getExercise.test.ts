import getExercise from "./getExercise";

jest.mock("../data/exercises.json", () => [
    {
        id: 1,
        title: "Bench Press",
    },
]);

describe("The getExercise function", () => {
    test("returns a particular exercise", async () => {
        const exercise = await getExercise(1);

        expect(exercise).toHaveProperty("title");
        expect(exercise).toHaveProperty("id");

        expect(exercise?.title).toEqual("Bench Press");
        expect(exercise?.id).toEqual(1);
    });
});
