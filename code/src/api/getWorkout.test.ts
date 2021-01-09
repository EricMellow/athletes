import getWorkout from "./getWorkout";

jest.mock("../data/workouts.json", () => [
    {
        id: 1,
        userId: 1,
        datetimeCompleted: "2017-11-20 00:04:27",
        blocks: [
            {
                sets: [
                    {
                        reps: 2,
                    },
                    {
                        reps: 2,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        userId: 1,
        datetimeCompleted: "2017-11-21 00:04:27",
        blocks: [
            {
                sets: [
                    {
                        reps: 2,
                    },
                    {
                        reps: 2,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        userId: 2,
        datetimeCompleted: "2017-11-20 00:04:27",
        blocks: [
            {
                sets: [
                    {
                        reps: 2,
                    },
                    {
                        reps: 2,
                    },
                ],
            },
        ],
    },
]);

describe("The getWorkout function", () => {
    test("returns a single workout", async () => {
        const testIdValue = 1;
        const workout = await getWorkout(testIdValue);

        expect(workout).toHaveProperty("id");
        expect(workout).toHaveProperty("userId");
        expect(workout).toHaveProperty("datetimeCompleted");
        expect(workout).toHaveProperty("blocks");

        expect(workout?.id).toEqual(testIdValue);
    });
});
