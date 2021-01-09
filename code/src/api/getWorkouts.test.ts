import getWorkouts from "./getWorkouts";

jest.mock("../data/workouts.json", () => [
    {
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

describe("The getWorkouts function", () => {
    test("returns is an array of workouts", async () => {
        const workouts = await getWorkouts();

        expect(workouts).toHaveLength(3);
    });
});
