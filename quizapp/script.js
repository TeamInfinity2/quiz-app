// script.js

const quizData = [
    {
        question: "What is the first letter of the alphabet?",
        options: ["A", "B", "C", "D"],
        correct: "A"
    },
    {
        question: "What color is the sky?",
        options: ["Green", "Blue", "Yellow", "Red"],
        correct: "Blue"
    },
    {
        question: "Which animal says 'meow'?",
        options: ["Dog", "Cat", "Bird", "Fish"],
        correct: "Cat"
    },
    {
        question: "How many months are there in a year?",
        options: ["10", "11", "12", "13"],
        correct: "12"
    },
    {
        question: "How many days are there in a week?",
        options: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "How many days are there in a year?",
        options: ["360", "365", "366", "370"],
        correct: "365"
    },
    {
        question: "Which number comes after 15?",
        options: ["14", "16", "17", "18"],
        correct: "16"
    },
    {
        question: "How many colours are there in a rainbow?",
        options: ["5", "6", "7", "8"],
        correct: "7"
    },
    {
        question: "We use our ears to ______.",
        options: ["See", "Hear", "Taste", "Touch"],
        correct: "Hear"
    },
    {
        question: "Name the day that comes after Tuesday?",
        options: ["Sunday", "Monday", "Wednesday", "Thursday"],
        correct: "Wednesday"
    },
    {
        question: "How many vowels are there in the English alphabet?",
        options: ["4", "5", "6", "7"],
        correct: "5"
    },
    {
        question: "A cow has ____ legs.",
        options: ["2", "3", "4", "5"],
        correct: "4"
    },
    {
        question: "Which gas do humans need to breathe to live?",
        options: ["Nitrogen", "Oxygen", "Hydrogen", "Carbon Dioxide"],
        correct: "Oxygen"
    },
    {
        question: "Which month comes after October?",
        options: ["September", "November", "December", "January"],
        correct: "November"
    },
    {
        question: "How many zeroes are there in one thousand?",
        options: ["Two", "Three", "Four", "Five"],
        correct: "Three"
    },
    {
        question: "How many hands do you have?",
        options: ["1", "2", "3", "4"],
        correct: "2"
    },
    {
        question: "We chew food using our ____________.",
        options: ["Nose", "Hands", "Teeth", "Tongue"],
        correct: "Teeth"
    },
    {
        question: "Which sense organ do you use to smell?",
        options: ["Eyes", "Ears", "Nose", "Skin"],
        correct: "Nose"
    },
    {
        question: "Which part of the plant is brown and below the ground?",
        options: ["Stem", "Leaf", "Flower", "Roots"],
        correct: "Roots"
    },
    {
        question: "Which part of a plant has seeds?",
        options: ["Root", "Stem", "Fruit", "Leaf"],
        correct: "Fruit"
    },
    {
        question: "Which part of a plant soaks up nutrients and water from the soil?",
        options: ["Stem", "Roots", "Leaf", "Flower"],
        correct: "Root"
    },
    {
        question: "Which bird has a far sight and turns its head all the way round?",
        options: ["Eagle", "Owl", "Parrot", "Sparrow"],
        correct: "Owl"
    },
    {
        question: "Which animal eats mice?",
        options: ["Dog", "Cat", "Horse", "Elephant"],
        correct: "Cat"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    const currentQuestion = quizData[currentQuestionIndex];
    const questionEl = document.createElement("div");
    questionEl.className = "question";
    questionEl.innerText = currentQuestion.question;

    quizContainer.appendChild(questionEl);

    currentQuestion.options.forEach(option => {
        const optionEl = document.createElement("div");
        optionEl.className = "options";

        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = "radio";
        input.name = "option";
        input.value = option;

        label.appendChild(input);
        label.append(" " + option);
        optionEl.appendChild(label);

        quizContainer.appendChild(optionEl);
    });
}

function submitQuiz() {
    const selectedOption = document.querySelector("input[name='option']:checked");

    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        } else {
            displayResult();
        }
    } else {
        alert("Please select an answer before submitting!");
    }
}

function displayResult() {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("submit").style.display = "none";
    document.getElementById("result").innerText = `You scored ${score} out of ${quizData.length}!`;
}

// Load the first question
loadQuiz();
