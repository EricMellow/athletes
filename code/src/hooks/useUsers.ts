import { useState, useEffect } from "react";
import getUsers from "../api/getUsers";

export default function useUsers() {
    const [users, setUsers] = useState<Array<TrainHeroic.User>>([]);

    useEffect(() => {
        const getData = async () => {
            const userResponse = await getUsers();
            setUsers(userResponse);
        };

        getData();
    }, [setUsers]);

    return users;
}
