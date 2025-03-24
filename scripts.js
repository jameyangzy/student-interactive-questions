const questionData = {
    A: [
        {
            number: "A1",
            text: "Question 1: Solve the 5-Level Pyramid with a Given Value",
            task: "Welcome to the Brick Pyramid Challenge! In this problem, you will apply logical reasoning and step-by-step calculations to fill in missing values in a 5-level pyramid. Each brick follows a simple rule: Every brick is the sum of the two bricks directly below it. In this pyramid, one value is already given—the bottom-left brick is 5. Your task is to fill in the missing numbers so that the pyramid follows the rule.",
            mainTask: "Use the pyramid rule to determine all missing values and complete the pyramid.",
            pyramidStructure: [
                [null, null, null, null, 280],
                [null, null, null, 75],
                [null, 31],
                [5, 13]
            ],
            hints: [
                "Start from the bottom row—you already know the first number (5). Use the rule to find the next brick in that row.",
                "Move upward step by step, using the sum rule to fill in the second row, then the third, and so on.",
                "Check your calculations—each brick must be the sum of the two below it."
            ]
        }
        // 继续定义 A2 到 A6 的题目...
    ]
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
