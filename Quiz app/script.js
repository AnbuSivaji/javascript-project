// Quiz Questions Array
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is 5 + 3 * 2?",
    options: ["16", "10", "11", "13"],
    answer: "11",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

function loadQuestion() {
  // Current Question Data
  let currentQuestion = questions[currentQuestionIndex];

  // Display Question
  questionElement.textContent = currentQuestion.question;

  // Clear Previous Options
  optionsElement.innerHTML = "";

  // Display Options
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });

  nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
  let correctAnswer = questions[currentQuestionIndex].answer;
  let optionsButtons = document.querySelectorAll(".option-btn");

  optionsButtons.forEach((button) => {
    if (button.textContent === correctAnswer) {
      button.style.backgroundColor = "green"; // Correct Answer
    }
    if (
      button.textContent === selectedOption &&
      selectedOption !== correctAnswer
    ) {
      button.style.backgroundColor = "red"; // Wrong Answer
    }
    button.disabled = true; // Disable all buttons after selection
  });

  if (selectedOption === correctAnswer) {
    score++;
  }

  nextButton.style.display = "block"; // Show "Next Question" Button
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion(); // Load next question
  } else {
    showResults(); // Show final score
  }
});

function showResults() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreElement.textContent = `${score} / ${questions.length}`;
}

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultBox.classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
});

// Load First Question Initially
loadQuestion();
function checkAnswer(selectedOption) {
  let correctAnswer = questions[currentQuestionIndex].answer;
  let optionsButtons = document.querySelectorAll(".option-btn");

  optionsButtons.forEach((button) => {
    if (button.textContent === correctAnswer) {
      button.style.backgroundColor = "green"; // Correct Answer
    }
    if (
      button.textContent === selectedOption &&
      selectedOption !== correctAnswer
    ) {
      button.style.backgroundColor = "red"; // Wrong Answer
    }
    button.disabled = true; // Disable all buttons after selection
  });

  // 🎉 Ouuu Effect
  if (selectedOption === correctAnswer) {
    score++;
    showReaction("🔥 Ouuu! Super da!", "green");
  } else {
    showReaction("😢 Oh no! Try again!", "red");
  }

  nextButton.style.display = "block"; // Show "Next Question" Button
}

// Function to Show Reaction
function showReaction(message, color) {
  let reactionBox = document.createElement("div");
  reactionBox.textContent = message;
  reactionBox.style.position = "fixed";
  reactionBox.style.top = "50%";
  reactionBox.style.left = "50%";
  reactionBox.style.transform = "translate(-50%, -50%)";
  reactionBox.style.background = color;
  reactionBox.style.color = "white";
  reactionBox.style.padding = "15px";
  reactionBox.style.borderRadius = "8px";
  reactionBox.style.fontSize = "18px";
  reactionBox.style.fontWeight = "bold";
  reactionBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";

  document.body.appendChild(reactionBox);

  setTimeout(() => {
    reactionBox.remove();
  }, 1500); // Message disappears after 1.5 seconds
}
// Load Sound Effects
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

function checkAnswer(selectedOption) {
    let correctAnswer = questions[currentQuestionIndex].answer;
    let optionsButtons = document.querySelectorAll(".option-btn");

    optionsButtons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "green"; // Correct Answer
        }
        if (button.textContent === selectedOption && selectedOption !== correctAnswer) {
            button.style.backgroundColor = "red"; // Wrong Answer
        }
        button.disabled = true; // Disable all buttons after selection
    });

    // 🎉 Ouuu Effect with Sound
    if (selectedOption === correctAnswer) {
        score++;
        correctSound.play(); // Play correct sound
        showReaction("🔥 Ouuu! Super da!", "green");
    } else {
        wrongSound.play(); // Play wrong sound
        showReaction("😢 Oh no! Try again!", "red");
    }

    nextButton.style.display = "block"; // Show "Next Question" Button
}

// Function to Show Reaction with Animation
function showReaction(message, color) {
    let reactionBox = document.createElement("div");
    reactionBox.textContent = message;
    reactionBox.style.position = "fixed";
    reactionBox.style.top = "50%";
    reactionBox.style.left = "50%";
    reactionBox.style.transform = "translate(-50%, -50%) scale(1)";
    reactionBox.style.background = color;
    reactionBox.style.color = "white";
    reactionBox.style.padding = "15px";
    reactionBox.style.borderRadius = "8px";
    reactionBox.style.fontSize = "18px";
    reactionBox.style.fontWeight = "bold";
    reactionBox.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
    reactionBox.style.transition = "transform 0.3s ease-in-out";

    document.body.appendChild(reactionBox);

    // Bounce Animation
    setTimeout(() => {
        reactionBox.style.transform = "translate(-50%, -50%) scale(1.2)";
    }, 100);
    setTimeout(() => {
        reactionBox.style.transform = "translate(-50%, -50%) scale(1)";
    }, 300);

    // Remove Message after 1.5 seconds
    setTimeout(() => {
        reactionBox.remove();
    }, 1500);
}
