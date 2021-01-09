import getTotalByDateForUserAndKey from "./getTotalByDateForKey";

export default async function getTotalRepsByDateForUser(userId: number) {
    const key = "reps";
    return await getTotalByDateForUserAndKey(userId, key);
}
