declare namespace TrainHeroic {
    interface User {
        nameFirst: string;
        nameLast: string;
        id: number;
        profilePhotoUrl: string;
        slug: string;
    }

    interface Exercise {
        id: number;
        title: string;
    }

    interface Workout {
        id: number;
        userId: number;
        datetimeCompleted: string;
        blocks: Array<Block>;
    }

    interface Block {
        exerciseId: number;
        sets: Array<Set>;
    }

    interface Set {
        reps: number;
        weight: number | null;
    }

    type SummableKey = "reps" | "weight";
}
