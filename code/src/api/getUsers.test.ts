import getUsers from "./getUsers";

jest.mock("../data/users.json", () => [
    {
        nameFirst: "Joe",
        nameLast: "Smith",
        id: 1,
    },
    {
        nameFirst: "Jane",
        nameLast: "Smith",
        id: 2,
    },
]);

describe("The getUser function", () => {
    test("returns a single user", async () => {
        const users = await getUsers();

        expect(users).toHaveLength(2);
    });
});
