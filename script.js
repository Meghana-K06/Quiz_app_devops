let questions = [
    {
        question: "What is Jenkins used for?",
        options: ["Database", "CI/CD Automation", "Game Development", "Photo Editing"],
        answer: "CI/CD Automation"
    },
    {
        question: "What is Docker used for?",
        options: ["Containerization", "Cooking", "Painting", "Accounting"],
        answer: "Containerization"
    },
    {
        question: "GitHub is used for?",
        options: ["Version Control", "Video Editing", "Music", "Weather"],
        answer: "Version Control"
    }
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentIndex].question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questions[currentIndex].options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = function () {
            checkAnswer(option);
        };
        optionsDiv.appendChild(btn);
        optionsDiv.appendChild(document.createElement("br"));
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentIndex].answer) {
        score++;
    }
    document.getElementById("score").innerText = "Score: " + score;
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
    }
}

loadQuestion();