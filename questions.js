// ============================================================
// MINDMETRIX - QUESTION BANK
// ============================================================

const QUESTIONS = [
    // ---------------- QUANTITATIVE ----------------

    {
        id: 1,
        category: "Quantitative",
        difficulty: "Easy",
        text: "A train travels 120 km in 2 hours. What is its average speed?",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        answer: 2
    },
    {
        id: 2,
        category: "Quantitative",
        difficulty: "Easy",
        text: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        answer: 2
    },
    {
        id: 3,
        category: "Quantitative",
        difficulty: "Medium",
        text: "If a shirt costs ₹800 after a 20% discount, what was its original price?",
        options: ["₹960", "₹1000", "₹1200", "₹1600"],
        answer: 1
    },
    {
        id: 4,
        category: "Quantitative",
        difficulty: "Medium",
        text: "The average of 5 numbers is 24. If one number is removed, the average becomes 20. What was the removed number?",
        options: ["30", "36", "40", "44"],
        answer: 2
    },
    {
        id: 5,
        category: "Quantitative",
        difficulty: "Medium",
        text: "A can complete a job in 6 days, B in 12 days. Working together, how many days will they take?",
        options: ["3 days", "4 days", "5 days", "6 days"],
        answer: 1
    },
    {
        id: 6,
        category: "Quantitative",
        difficulty: "Hard",
        text: "Simple interest on ₹5000 at 8% per annum for 3 years is:",
        options: ["₹1000", "₹1100", "₹1200", "₹1300"],
        answer: 2
    },
    {
        id: 7,
        category: "Quantitative",
        difficulty: "Hard",
        text: "The ratio of two numbers is 3:5 and their sum is 96. Find the larger number.",
        options: ["36", "48", "60", "72"],
        answer: 2
    },

    // ---------------- LOGICAL REASONING ----------------

    {
        id: 8,
        category: "Logical Reasoning",
        difficulty: "Easy",
        text: "Find the next number in the series: 2, 4, 8, 16, ?",
        options: ["24", "28", "32", "36"],
        answer: 2
    },
    {
        id: 9,
        category: "Logical Reasoning",
        difficulty: "Easy",
        text: "If MONDAY is coded as NPOEBZ, how is TUESDAY coded?",
        options: ["UVFTEBZ", "UVFTEZB", "UVFTBEZ", "UVFTEBZ"],
        answer: 0
    },
    {
        id: 10,
        category: "Logical Reasoning",
        difficulty: "Medium",
        text: "Pointing to a photograph, a man says, 'She is the daughter of my grandfather's only son.' How is the woman related to the man?",
        options: ["Mother", "Sister", "Aunt", "Cousin"],
        answer: 1
    },
    {
        id: 11,
        category: "Logical Reasoning",
        difficulty: "Medium",
        text: "Find the odd one out: Triangle, Square, Circle, Sphere",
        options: ["Triangle", "Square", "Circle", "Sphere"],
        answer: 3
    },
    {
        id: 12,
        category: "Logical Reasoning",
        difficulty: "Medium",
        text: "Complete the series: A, C, F, J, ?",
        options: ["M", "N", "O", "P"],
        answer: 2
    },
    {
        id: 13,
        category: "Logical Reasoning",
        difficulty: "Hard",
        text: "In a certain code, 'BALL' is written as 'DCNN'. How is 'GAME' written?",
        options: ["ICOG", "IBOG", "ICNG", "ICOF"],
        answer: 0
    },
    {
        id: 14,
        category: "Logical Reasoning",
        difficulty: "Hard",
        text: "If all Bloops are Razzles and all Razzles are Lazzles, are all Bloops definitely Lazzles?",
        options: ["Yes", "No", "Cannot be determined", "Only some"],
        answer: 0
    },

    // ---------------- VERBAL ----------------

    {
        id: 15,
        category: "Verbal",
        difficulty: "Easy",
        text: "Choose the synonym of 'Abundant'.",
        options: ["Scarce", "Plentiful", "Rare", "Limited"],
        answer: 1
    },
    {
        id: 16,
        category: "Verbal",
        difficulty: "Easy",
        text: "Choose the antonym of 'Optimistic'.",
        options: ["Hopeful", "Cheerful", "Pessimistic", "Confident"],
        answer: 2
    },
    {
        id: 17,
        category: "Verbal",
        difficulty: "Medium",
        text: "Fill in the blank: She has been working here _ 2019.",
        options: ["since", "for", "from", "at"],
        answer: 0
    },
    {
        id: 18,
        category: "Verbal",
        difficulty: "Medium",
        text: "Identify the correctly spelled word.",
        options: ["Recieve", "Receive", "Receeve", "Receve"],
        answer: 1
    },
    {
        id: 19,
        category: "Verbal",
        difficulty: "Hard",
        text: "Choose the correctly punctuated sentence.",
        options: [
            "Its a great day, isnt it?",
            "It's a great day, isn't it?",
            "Its a great day, isn't it.",
            "It's a great day isnt it?"
        ],
        answer: 1
    },
    {
        id: 20,
        category: "Verbal",
        difficulty: "Hard",
        text: "Choose the word that best completes the analogy: Doctor is to Hospital as Teacher is to _.",
        options: ["Book", "School", "Student", "Classroom"],
        answer: 1
    }
];

const CATEGORIES = [
    "Quantitative",
    "Logical Reasoning",
    "Verbal"
];

