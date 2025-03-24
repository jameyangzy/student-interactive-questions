const questionData = {
    A: [
        {
            number: "A1",
            text: "Question 1: Solve the 5-Level Pyramid with a Given Value",
            task: "Welcome to the Brick Pyramid Challenge! ...",
            mainTask: "Use the pyramid rule to determine all missing values and complete the pyramid.",
            pyramidStructure: [
                [null, null, null, null, 280],
                [null, null, null, 75],
                [null, 31, null],
                [5, 13, null, null]
            ],
            hints: [
                "Start from the bottom row—you already know the first number (5). Use the rule to find the next brick in that row.",
                "Move upward step by step, using the sum rule to fill in the second row, then the third, and so on.",
                "Check your calculations—each brick must be the sum of the two below it."
            ]
        },
        // 继续定义其他题目...
    ],
    // 定义 B 和 C 类别题目...
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadQuestion() {
    const category = getQueryParam("category");
    const questionIndex = parseInt(getQueryParam("question")) - 1;
    const question = questionData[category] ? questionData[category][questionIndex] : null;

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

    document.title = `Question ${question.number}`;
}

function createPyramidHTML(pyramidData) {
    let html = "<div class='pyramid'>";
    for (let row of pyramidData) {
        html += "<div class='pyramid-row'>";
        for (let brick of row) {
            html += `<input type="text" value="${brick !== null ? brick : ""}" class="pyramid-input" style="width: 50px;">`;
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

function submitAnswer() {
    alert("Answer submitted!");
    window.location.href = 'end.html';
}

window.onload = loadQuestion;
