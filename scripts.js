const questionData = {
    A: [
        {
            number: "A1",
            text: "Question 1: Solve the 5-Level Pyramid with a Given Value",
            task: `Welcome to the Brick Pyramid Challenge! You will apply logical reasoning and step-by-step calculations to fill in missing values in a 5-level pyramid.`,
            mainTask: "Determine all missing values and complete the pyramid.",
            pyramidStructure: [
                [null, null, null, null, 280],
                [null, null, null, 75, null],
                [null, 31, null, null],
                [5, null, 13, null],
                [null, null, null, null, null]
            ],
            hints: [
                "Start from the bottom row—you already know the first number (5). Use the rule to find the next brick in that row.",
                "Move upward step by step, using the sum rule to fill in the second row, then the third, and so on.",
                "Check your calculations—each brick must be the sum of the two below it."
            ]
        },
        // 根据具体题目继续设置A2到A6
    ],
    B: [
        // 根据具体题目设置B1到B6
    ],
    C: [
        // 根据具体题目设置C1到C6
    ]
};

let currentQuestionIndex = 0;
let category = '';

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadQuestion() {
    category = getQueryParam("category") || 'A'; // 默认类别
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
    document.getElementById("choicesContainer").innerHTML = question.choices ? question.choices.map(choice => `<button class="option-btn">${choice}</button><br>`).join("") : "";
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
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    } else {
        window.location.href = "selection.html";
    }
}

function nextQuestion() {
    const questionList = questionData[category];
    if (currentQuestionIndex < questionList.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("You've completed all questions!");
    }
}

function submitAnswer() {
    const questionList = questionData[category];
    if (currentQuestionIndex === questionList.length - 1) {
        alert("All questions completed! Submitting answers.");
        window.location.href = 'end.html';
    } else {
        alert("Please complete all questions before submitting.");
    }
}

window.onload = loadQuestion;
