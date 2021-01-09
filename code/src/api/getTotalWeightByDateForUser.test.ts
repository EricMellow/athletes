import getTotalWeightByDateForUser from "./getTotalWeightByDateForUser";

jest.mock("../data/workouts.json", () => [
    {
        userId: 1,
        datetimeCompleted: "2017-11-20 00:04:27",
        blocks: [
            {
                sets: [
                    {
                        reps: 2,
                        weight: 400,
                    },
                    {
                        reps: 2,
                        weight: null,
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
                        weight: 400,
                    },
                    {
                        reps: 2,
                        weight: 400,
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
                        weight: 400,
                    },
                    {
                        reps: 2,
                        weight: null,
                    },
                ],
            },
        ],
    },
]);

describe("The getTotalRepsByDateForUser function", () => {
    test("returns an object with date keys with correct values.", async () => {
        const totals = await getTotalWeightByDateForUser(1);

        const date1Key = "2017-11-20";
        const date2Key = "2017-11-21";
        const nonExistentKey = "2017-11-22";

        expect(totals).toHaveProperty(date1Key);
        expect(totals).toHaveProperty(date2Key);
        expect(totals[nonExistentKey]).toBeUndefined();

        expect(totals[date1Key]).toEqual(400);
        expect(totals[date2Key]).toEqual(800);
    });
});
