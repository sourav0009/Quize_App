const question = [
    {
        question:"Which of the following is not a Java features?",
        answere: [
            {text: "Dynamic", correct: false},
            {text: "Architecture Neutral", correct: false},
            {text: "Use of pointers", correct: true},
            {text: "Object-oriented", correct: false},
        ]
    },
    {
        question:"Which of the following is a valid long literal?",
        answere: [
            {text: "ABH8097", correct: false},
            {text: "L990023", correct: false},
            {text: "904423", correct: false},
            {text: "0xnf029L", correct: true},
        ]
    },
    {
        question:" Which package contains the Random class?",
        answere: [
            {text: "java.util package", correct: true},
            {text: "java.lang package", correct: false},
            {text: "java.awt package", correct: false},
            {text: "java.io package", correct: false},
        ]
    },
    {
        question:"  In which memory a String is stored, when we create a string using new operator?",
        answere: [
            {text: "Stack", correct: false},
            {text: "String memory", correct: false},
            {text: "Heap memory", correct: true},
            {text: "Random storage space", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
