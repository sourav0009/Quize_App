const questions = [
    {
        question: "Which of the following is not a Java feature?",
        answers: [
            { text: "Dynamic", correct: false },
            { text: "Architecture Neutral", correct: false },
            { text: "Use of pointers", correct: true },
            { text: "Object-oriented", correct: false },
        ]
    },
    {
        question: "Which of the following is a valid long literal?",
        answers: [
            { text: "ABH8097", correct: false },
            { text: "L990023", correct: false },
            { text: "904423", correct: false },
            { text: "0xnf029L", correct: true },
        ]
    },
    {
        question: "Which package contains the Random class?",
        answers: [
            { text: "java.util package", correct: true },
            { text: "java.lang package", correct: false },
            { text: "java.awt package", correct: false },
            { text: "java.io package", correct: false },
        ]
    },
    {
        question: "In which memory is a String stored when we create a string using the new operator?",
        answers: [
            { text: "Stack", correct: false },
            { text: "String memory", correct: false },
            { text: "Heap memory", correct: true },
            { text: "Random storage space", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hidden");
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add(
            "font-medium", 
            "w-[100%]", 
            "border", 
            "p-2", 
            "mt-5", 
            "text-left", 
            "transition", 
            "duration-300", 
            "rounded-sm"
        );
        button.dataset.correct = answer.correct; // Set correct answer data
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // Keep all options visible and add feedback colors
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true; // Disable buttons to prevent additional clicks
        button.classList.add("text-black"); // Ensure text color is set to black
        if (button.dataset.correct === "true") {
            button.classList.add("bg-green-500"); // Correct answer in green
        } else {
            button.classList.add("bg-red-500"); // Incorrect answers in red
        }
    });

    // Update score if the selected answer is correct
    if (isCorrect) {
        score++;
    }
    
    // Show the next button
    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz finished! Your score is ${score} out of ${questions.length}`);
        startQuiz();
    }
});

startQuiz();
