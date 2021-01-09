import Users from "../data/users.json";

export default async function getUser(userId: number) {
    return Users.find((user: TrainHeroic.User) => user.id === userId);
}
