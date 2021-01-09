import getTotalByDateForKey from "./getTotalByDateForKey";

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
]);

describe("The getTotalByDateForKey function", () => {
    test("returns an object with date keys with correct values.", async () => {
        const totals = await getTotalByDateForKey(1, "reps");

        const date1Key = "2017-11-20";
        const date2Key = "2017-11-21";
        const nonExistentKey = "2017-11-22";

        expect(totals).toHaveProperty(date1Key);
        expect(totals).toHaveProperty(date2Key);
        expect(totals[nonExistentKey]).toBeUndefined();

        expect(totals[date1Key]).toEqual(4);
        expect(totals[date2Key]).toEqual(4);
    });
});
