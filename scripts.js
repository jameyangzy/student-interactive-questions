const questionData = {
    A: [
        {
            number: "A1",
            text: "Question 1: Solve the 5-Level Pyramid with a Given Value",
            task: "Welcome to the Brick Pyramid Challenge! Apply logical reasoning...",
            mainTask: "Determine all missing values and complete the pyramid.",
            pyramidStructure: [
                [null, null, null, null, 280],
                [null, null, null, 75],
                [null, 31, null],
                [5, 13, null, null]
            ],
            hints: [
                "Start from the bottom row...",
                "Move upward step by step...",
                "Check your calculations."
            ]
        },
        // Add more questions here...
    ],
    // Define B and C categories...
};

let currentQuestionIndex = 0;

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadQuestion() {
    const category = getQueryParam("category");
    const questionList = questionData[category];
    const question = questionList[currentQuestionIndex];

    if (!question) {
        document.getElementById("questionNumber").innerText = "Invalid question index!";
        return;
    }

    document.getElementById("questionNumber").innerText = question.number;
    document.getElementById("questionText").innerText = `${question.text}\n${question.task}`;

    const pyramidHTML = createPyramidHTML(question.pyramidStructure);
    document.getElementById("pyramidContainer").innerHTML = `<p>${question.mainTask}</p>${pyramidHTML}`;
    document.getElementById("choicesContainer").innerHTML = question.choices ? question.choices.map(choice => `<label><input type="radio" name="choice">${choice}</label><br>`).join("") : "";
    document.getElementById("hintList").innerHTML = question.hints.map(hint => `<li>${hint}</li>`).join("");
}

function createPyramidHTML(pyramidData) {
    let html = "<div class='pyramid'>";
    for (let row of pyramidData) {
        html += "<div class='pyramid-row'>";
        for (let brick of row) {
            html += `<input type="text" value="${brick !== null ? brick : ""}" class="pyramid-input">`;
        }
        html += "</div>";
    }
    html += "</div>";
    return html;
}

function showHint() {
    document.getElementById("hintList").classList.toggle("hidden");
}

function goBack() {
    window.location.href = "selection.html";
}

function nextQuestion() {
    const category = getQueryParam("category");
    const questionList = questionData[category];
    if (currentQuestionIndex < questionList.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("You've completed all questions!");
    }
}

function submitAnswer() {
    alert("Answer submitted!");
    window.location.href = 'end.html';
}

window.onload = loadQuestion;
