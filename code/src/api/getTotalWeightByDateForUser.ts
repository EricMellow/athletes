import getTotalByDateForUserAndKey from "./getTotalByDateForKey";

export default async function getTotalWeightByDateForUser(userId: number) {
    const key = "weight";
    return await getTotalByDateForUserAndKey(userId, key);
}
