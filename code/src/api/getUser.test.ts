import getUser from "./getUser";

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
        const user = await getUser(1);

        expect(user).toHaveProperty("nameFirst");
        expect(user).toHaveProperty("nameLast");
        expect(user).toHaveProperty("id");

        expect(user?.nameFirst).toEqual("Joe");
        expect(user?.nameLast).toEqual("Smith");
        expect(user?.id).toEqual(1);
    });
});
