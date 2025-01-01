const questions = [
    {
        "question": "What is the basic fundamental language?",
        "option1": "C",
        "option2": "C++",
        "option3": "Python",
        "option4": "Java",
        "answer": "option1"
    },
    {
        "question": "Which language is used for web development?",
        "option1": "Python",
        "option2": "JavaScript",
        "option3": "C#",
        "option4": "Ruby",
        "answer": "option2"
    },
    {
        "question": "Who developed C language?",
        "option1": "Dennis Ritchie",
        "option2": "Bjarne Stroustrup",
        "option3": "James Gosling",
        "option4": "Guido van Rossum",
        "answer": "option1"
    },
    {
        "question": "What does HTML stand for?",
        "option1": "Hyperlinks and Text Markup Language",
        "option2": "Home Tool Markup Language",
        "option3": "Hyper Text Markup Language",
        "option4": "Hyper Text Makeup Language",
        "answer": "option3"
    },
    {
        "question": "Which language is used for data analysis?",
        "option1": "Java",
        "option2": "R",
        "option3": "Swift",
        "option4": "C++",
        "answer": "option2"
    }
];

var quiz = document.querySelector(".quiz");
var questionElement = document.getElementById("question");
const nextButton = document.getElementById("next");
var result = document.getElementById("result");
var scoreElement = document.getElementById("score");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

let selectedOption = null;
let currentQuestionIndex = 0;
let score = 0;

function selectOption(optionId) {
    selectedOption = optionId;
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById(optionId).classList.add('selected');
}

function startQuiz(index) {
    const data = questions[index];
    questionElement.innerHTML = `${index + 1}. ${data.question}`;
    option1.innerHTML = data.option1;
    option2.innerHTML = data.option2;
    option3.innerHTML = data.option3;
    option4.innerHTML = data.option4;
}

function loadQuestion() {
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    if (questions[currentQuestionIndex].answer === selectedOption) {
        score++;
    }

    currentQuestionIndex++;
    selectedOption = null;

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerHTML = "Finish";
    } else {
        nextButton.innerHTML = "Next";
    }

    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('selected'));
    startQuiz(currentQuestionIndex);
}

function showResult() {
    quiz.style.display = "none";
    result.style.display = "block";
    scoreElement.innerHTML = `You scored ${score} out of ${questions.length}`;
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    quiz.style.display = "";
    result.style.display = "none";
    startQuiz(currentQuestionIndex);
}

startQuiz(currentQuestionIndex);
