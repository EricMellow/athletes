import { renderHook } from "@testing-library/react-hooks";
import useUsers from "./useUsers";

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

describe("The useUsers hook", () => {
    test("should return an array of users", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useUsers());

        await waitForNextUpdate();

        expect(result.current).toHaveLength(2);
    });
});
