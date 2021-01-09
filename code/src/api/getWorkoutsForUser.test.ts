import getWorkoutsForUser from "./getWorkoutsForUser";

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
    test("returns an array of workouts for a particular user", async () => {
        const workouts = await getWorkoutsForUser(1);

        expect(workouts).toHaveLength(2);
    });
});
