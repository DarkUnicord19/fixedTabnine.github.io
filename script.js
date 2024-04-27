const questions = [
    {
        question: "Do you like art?",
        options: ["Yes", "No", "I don't know"]
    },
    {
        question: "Would you like to go to an art gallery?",
        options: ["Yes", "No", "Maybe"]
    },
    {
        question: "What is your favorite color?",
        options: ["Blue", "Red", "Yellow"]
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const option1Element = document.getElementById("option-1");
    const option2Element = document.getElementById("option-2");
    const option3Element = document.getElementById("option-3");

    questionElement.textContent = questions[currentQuestion].question;
    option1Element.textContent = questions[currentQuestion].options[0];
    option2Element.textContent = questions[