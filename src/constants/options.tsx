export type TravelerOption = {
    id: number;
    title: string;
    description: string;
    icon: string;
    people: string;
};

export const SelectTravelersList: TravelerOption[] = [
    {
        id: 1,
        title: "Just Me",
        description: "A sole traveler in exploration",
        icon: "✈️",
        people: "Solo",
    },
    {
        id: 2,
        title: "A Couple",
        description: "Two travelers in tandem",
        icon: "🥂",
        people: "Couple",
    },
    {
        id: 3,
        title: "Family",
        description: "A group of fun-loving adventurers",
        icon: "🏡",
        people: "Family",
    },
    {
        id: 4,
        title: "Friends",
        description: "A bunch of thrill-seekers",
        icon: "⛵",
        people: "Friends",
    },
];

export type BudgetOption = {
    id: number;
    title: string;
    description: string;
    icon: string;
};

export const SelectBudgetOptions: BudgetOption[] = [
    {
        id: 1,
        title: "Cheap",
        description: "Stay conscious of costs",
        icon: "💵",
    },
    {
        id: 2,
        title: "Moderate",
        description: "Keep cost on the average side",
        icon: "💰",
    },
    {
        id: 3,
        title: "Luxury",
        description: "Don't worry about cost",
        icon: "💸",
    },
];