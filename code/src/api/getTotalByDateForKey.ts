import moment from "moment";
import getWorkoutsForUser from "./getWorkoutsForUser";

interface DateStringToNumericValueObject {
    [key: string]: number;
}

export default async function getTotalByDateForKeyAndUser(
    userId: number,
    key: TrainHeroic.SummableKey
) {
    const workouts = getWorkoutsForUser(userId);
    const sumByDate: DateStringToNumericValueObject = {};

    for (const workout of workouts) {
        const dateCompleted: string = moment(workout.datetimeCompleted).format(
            "YYYY-MM-DD"
        );

        if (sumByDate[dateCompleted] === undefined) {
            sumByDate[dateCompleted] = 0;
        }

        for (const block of workout.blocks) {
            for (const set of block.sets) {
                sumByDate[dateCompleted] += set[key] || 0;
            }
        }
    }

    return sumByDate;
}
