const questionData = {
    A: [
        {
            title: "Question A1: Solve the 5-Level Pyramid",
            text: "Fill in the missing values in the 5-level pyramid. The bottom-left brick is 5.",
            hints: [
                "Start from the bottom row.",
                "Each brick is the sum of the two bricks below it.",
                "Check your calculations carefully."
            ],
            pyramid: "280, -1, -1, -1, 75, -1, 31, -1, -1, -1, 5, -1, 13, -1, -1",
            choices: [], // 无选择题
            hasTextarea: false
        },
        {
            title: "Question A2: Identify the Solution Type",
            text: "Determine whether the pyramid has a unique solution, multiple solutions, or no solution.",
            hints: [
                "Try to find one solution.",
                "Check if you can find another solution.",
                "Determine the solution type based on your findings."
            ],
            pyramid: "280, -1, -1, -1, 75, -1, 31, -1, -1, -1, 5, -1, 13, -1, -1",
            choices: ["Unique Solution", "Multiple Solutions", "No Solution"],
            hasTextarea: true
        },
        {
            title: "Question A3: Change the Position of a Given Number",
            text: "Change the position of a given number and solve the pyramid again.",
            hints: [
                "Adjust the position of the given number.",
                "Recalculate the pyramid based on the new position.",
                "Check if the solution changes."
            ],
            pyramid: "280, -1, -1, -1, 75, -1, 31, -1, -1, -1, -1, -1, 13, -1, -1",
            choices: [], // 无选择题
            hasTextarea: true
        },
        {
            title: "Question A4: Verify Contestant Solutions",
            text: "Verify whether the submitted solutions are correct and fix any mistakes.",
            hints: [
                "Check each row carefully.",
                "Ensure every brick follows the sum rule.",
                "Correct any errors you find."
            ],
            pyramid: "280, 149, 131, 74, 75, 56, 31, 43, 32, 24, 1, 30, 13, 19, 5",
            choices: ["A is correct", "B is correct", "Both A and B", "Neither A nor B"],
            hasTextarea: true
        },
        {
            title: "Question A5: Minimum Information for Unique Solution",
            text: "What is the least amount of given values required to create a unique-solution pyramid?",
            hints: [
                "Analyze the number of unknowns and equations.",
                "Determine the minimum number of given values needed.",
                "Test your hypothesis with examples."
            ],
            pyramid: "", // 无金字塔
            choices: ["4", "5", "6"],
            hasTextarea: true
        },
        {
            title: "Question A6: Design a Pyramid with Limited Information",
            text: "Design a pyramid with only 5 given numbers and ensure it has a solution.",
            hints: [
                "Choose 5 numbers for the bottom row.",
                "Fill in the rest of the pyramid using the sum rule.",
                "Check if your pyramid has a valid solution."
            ],
            pyramid: "-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1",
            choices: [], // 无选择题
            hasTextarea: false
        }
    ],
    B: [
        {
            title: "Question B1: Solve the 3-Level Pyramid",
            text: "Fill in the missing values in the 3-level pyramid.",
            hints: [
                "Use the pyramid rule.",
                "Start from the bottom row.",
                "Check your calculations."
            ],
            pyramid: "280, -1, -1, 75, -1, 13",
            choices: [], // 无选择题
            hasTextarea: false
        },
        {
            title: "Question B2: Unique Solution in 4-Level Pyramid",
            text: "Complete the 4-level pyramid and confirm that only one solution exists.",
            hints: [
                "Use the pyramid rule to determine the missing numbers.",
                "Check if there is only one possible solution."
            ],
            pyramid: "280, -1, -1, 75, -1, 31, -1, -1",
            choices: ["Yes", "No"],
            hasTextarea: true
        },
        {
            title: "Question B3: Harder 4-Level Pyramid",
            text: "Solve the 4-level pyramid with a unique solution (harder version).",
            hints: [
                "Assign variables to the unknown numbers.",
                "Use the given numbers to create equations.",
                "Solve the system of equations."
            ],
            pyramid: "280, -1, -1, 75, -1, 31, -1, 24",
            choices: ["Yes", "No"],
            hasTextarea: true
        },
        {
            title: "Question B4: Identify Solution Types",
            text: "Determine which pyramid has a unique solution, multiple solutions, or no solution.",
            hints: [
                "For Pyramid A, try adjusting the bottom row.",
                "For Pyramid B, check if a single set of values works.",
                "For Pyramid C, check for contradictions."
            ],
            pyramid: "", // 无金字塔
            choices: ["Unique Solution", "Multiple Solutions", "No Solution"],
            hasTextarea: true
        },
        {
            title: "Question B5: Solve the 5-Level Pyramid",
            text: "Solve the 5-level pyramid and identify its solution type.",
            hints: [
                "Fill in the missing values step by step.",
                "Determine if the solution is unique, multiple, or none."
            ],
            pyramid: "280, -1, -1, 75, -1, 31, -1, -1, -1, 13",
            choices: ["Unique Solution", "Multiple Solutions", "No Solution"],
            hasTextarea: true
        },
        {
            title: "Question B6: Design a Pyramid with Limited Information",
            text: "Design a pyramid with only 5 given numbers and ensure it has a solution.",
            hints: [
                "Choose 5 numbers for the bottom row.",
                "Fill in the rest of the pyramid using the sum rule.",
                "Check if your pyramid has a valid solution."
            ],
            pyramid: "-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1",
            choices: [], // 无选择题
            hasTextarea: false
        }
    ],
    C: [
        {
            title: "Question C1: Solve the System of Equations",
            text: "Solve the system of equations: x + y = 10, x - y = 2.",
            hints: [
                "Use substitution or elimination.",
                "Solve for one variable first.",
                "Check your solution."
            ],
            pyramid: "", // 无金字塔
            choices: [], // 无选择题
            hasTextarea: true
        },
        {
            title: "Question C2: Update the Pyramid",
            text: "Change the bottom number and recalculate the pyramid.",
            hints: [
                "Start from the bottom row.",
                "Update each brick according to the sum rule."
            ],
            pyramid: "48, 20, 28, 8, 12, 16, 3, 5, 7, 9, 1, 2, 3, 4, 5",
            choices: [], // 无选择题
            hasTextarea: false
        },
        {
            title: "Question C3: Relate Bottom Numbers to Top Number",
            text: "Write an equation that expresses the relationship between the bottom row numbers and the top number (280).",
            hints: [
                "Assign variables to the unknown bottom-row numbers.",
                "Use the pyramid rule to express how these numbers add up.",
                "Write the final equation."
            ],
            pyramid: "280, -1, -1, 75, -1, 31, -1, -1, -1, 13",
            choices: [], // 无选择题
            hasTextarea: true
        },
        {
            title: "Question C4: Find the Mistake in the Pyramid",
            text: "Find the incorrect equation in the pyramid and revise it.",
            hints: [
                "Use the pyramid rule to verify each equation.",
                "Identify where the equation does not hold.",
                "Solve for the correct value."
            ],
            pyramid: "", // 无金字塔
            choices: [], // 无选择题
            hasTextarea: true
        },
        {
            title: "Question C5: Solve for Missing Numbers",
            text: "Use algebra to solve for the missing values in the bottom row.",
            hints: [
                "Assign variables to the unknown numbers.",
                "Write equations based on the pyramid rule.",
                "Solve the system of equations."
            ],
            pyramid: "280, -1, -1, 75, -1, 31, -1, -1, -1, 13",
            choices: [], // 无选择题
            hasTextarea: true
        },
        {
            title: "Question C6: Design a Pyramid with Limited Information",
            text: "Design a pyramid with only 5 given numbers and ensure it has a solution.",
            hints: [
                "Choose 5 numbers for the bottom row.",
                "Fill in the rest of the pyramid using the sum rule.",
                "Check if your pyramid has a valid solution."
            ],
            pyramid: "-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1",
            choices: [], // 无选择题
            hasTextarea: false
        }
    ]
};

let currentCategory = "";
let currentQuestionIndex = 0;

function loadQuestion() {
    const urlParams = new URLSearchParams(window.location.search);
    currentCategory = urlParams.get('category');
    const questions = questionData[currentCategory];

    if (!questions) {
        alert("Invalid category selected.");
        return;
    }

    // 显示当前题目
    displayQuestion(questions[currentQuestionIndex]);
}

function displayQuestion(question) {
    // 更新题目序号和描述
    document.getElementById('questionNumber').innerText = question.title;
    document.getElementById('questionText').innerText = question.text;

    // 更新 Hint
    const hintList = document.getElementById('hintList');
    hintList.innerHTML = question.hints.map((hint, index) => `<li>${index + 1}. ${hint}</li>`).join("");

    // 显示或隐藏金字塔
    const pyramidContainer = document.getElementById('pyramidContainer');
    if (question.pyramid) {
        pyramidContainer.style.display = "block";
        generatePyramid(question.pyramid);
    } else {
        pyramidContainer.style.display = "none";
    }

    // 显示或隐藏选择题
    const choicesContainer = document.getElementById('choicesContainer');
    if (question.choices.length > 0) {
        choicesContainer.style.display = "block";
        choicesContainer.innerHTML = question.choices.map(choice => `
            <label>
                <input type="radio" name="choice" value="${choice}"> ${choice}
            </label><br>
        `).join("");
    } else {
        choicesContainer.style.display = "none";
    }

    // 显示或隐藏文本框
    const answerExplanation = document.getElementById('answerExplanation');
    if (question.hasTextarea) {
        answerExplanation.style.display = "block";
    } else {
        answerExplanation.style.display = "none";
    }
}

function generatePyramid(pyramidData) {
    const values = pyramidData.split(",").map(value => value.trim());
    const pyramidContainer = document.getElementById('pyramidContainer');
    pyramidContainer.innerHTML = "";

    let rowIndex = 0;
    let brickIndex = 0;

    while (brickIndex < values.length) {
        const row = document.createElement('div');
        row.className = 'row';

        for (let i = 0; i <= rowIndex; i++) {
            const brick = document.createElement('div');
            brick.className = 'box';

            if (values[brickIndex] === "-1") {
                const input = document.createElement('input');
                input.type = 'text';
                brick.appendChild(input);
            } else {
                brick.textContent = values[brickIndex];
            }

            row.appendChild(brick);
            brickIndex++;
        }

        pyramidContainer.appendChild(row);
        rowIndex++;
    }
}

function showHint() {
    const hintList = document.getElementById('hintList');
    hintList.classList.toggle('hidden');
}

function goBack() {
    window.history.back();
}

function submitAnswer() {
    alert("Answer submitted!");
    window.location.href = "end.html";
}

window.onload = loadQuestion;
