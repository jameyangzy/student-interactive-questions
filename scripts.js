const questionData = {
    A: [
        {
            text: "Solve the 5-Level Pyramid with a Given Value",
            pyramid: [
                "5", "", "", "", "",
                "", "", "", "",
                "", "", "",
                "", "",
                ""
            ],
            hints: [
                "Start from the bottom row—you already know the first number (5). Use the rule to find the next brick in that row.",
                "Move upward step by step, using the sum rule to fill in the second row, then the third, and so on.",
                "Check your calculations—each brick must be the sum of the two below it."
            ]
        },
        {
            text: "Identify the Solution Type of the 5-Level Pyramid",
            choices: ["Unique Solution", "Multiple Solutions", "No Solution"],
            hints: [
                "Try to find one solution—fill in the missing numbers step by step using the pyramid rule.",
                "Check if you can find another solution—try adjusting some of the missing numbers while still following the pyramid rule.",
                "Determine the solution type: if multiple valid solutions exist, the problem has multiple solutions; if only one solution is possible, it has a unique solution; if no numbers satisfy the pyramid rule, it has no solution."
            ]
        },
        {
            text: "Changing the Position of the Additional Given Number",
            pyramid: [
                "", "", "", "", "",
                "", "", "", "",
                "", "", "",
                "", "",
                ""
            ],
            hints: [
                "Try selecting a different brick and repeat the previous steps.",
                "Did the solution change?"
            ]
        },
        {
            text: "The Mysterious Brick Pyramid Challenge",
            choices: ["A is correct", "B is correct", "Both A and B", "Neither A nor B"],
            hints: [
                "Check each row carefully—does every brick follow the sum rule?",
                "If an error is found, modify the necessary numbers while keeping the pyramid consistent."
            ]
        },
        {
            text: "Finding the Minimum Information Needed for a Unique Solution",
            choices: ["4", "5", "6"],
            hints: [
                "Analyze patterns...",
                "Think about where the arbitrariness of the solution comes from."
            ]
        },
        {
            text: "Design and Solve a Pyramid with Limited Information",
            pyramid: [
                "", "", "", "", "",
                "", "", "", "",
                "", "", "",
                "", "",
                ""
            ],
            hints: [
                "Choose bottom row numbers that ensure unique solution.",
                "Fill in the rest according to the pyramid rule."
            ]
        }
    ],
    B: [
        {
            text: "Solve for the Missing Values in a 3-Level Pyramid",
            pyramid: [
                "5", "", "",
                "", "",
                ""
            ],
            hints: [
                "Look at the numbers you have and how they relate to each other.",
                "Use the pyramid rule to determine the missing values.",
                "Work step by step, checking your calculations."
            ]
        },
        {
            text: "A 4-Level Pyramid with a Unique Solution",
            pyramid: [
                "5", "", "", "",
                "", "", "",
                "",
                ""
            ],
            choices: ["Yes", "No"],
            hints: [
                "Use the pyramid rule to determine the missing numbers.",
                "Confirm that only one solution exists."
            ]
        },
        {
            text: "A 4-Level Pyramid with a Unique Solution (Harder Version)",
            pyramid: [
                "", "", "", "",
                "", "", "",
                "",
                ""
            ],
            choices: ["Yes", "No"],
            hints: [
                "Use the pyramid rule to determine the missing numbers.",
                "If you cannot determine a missing number directly, assign variables to the two unknown numbers in the bottom row (e.g., a, b), and use the given numbers to create equations that relate them."
            ]
        },
        {
            text: "Identifying Different Types of Pyramid Solutions",
            pyramid: [
                "", "", "", "", 
                "", "", "", 
                "", "", 
                ""
            ],
            choices: ["Unique Solution", "Multiple Solutions", "No Solution"],
            hints: [
                "For Pyramid A, try adjusting the bottom row.",
                "For Pyramid B, check if a single set of values work.",
                "For Pyramid C, check if the given numbers create a contradiction."
            ]
        },
        {
            text: "Solve the 5-Level Pyramid and Identify Its Solution Type",
            pyramid: [
                "", "", "", "", "", 
                "", "", "", "", 
                "", "", "", 
                "", "", 
                ""
            ],
            choices: ["Unique Solution", "Multiple Solutions", "No Solution"],
            hints: [
                "Use the pyramid rule to determine the missing numbers.",
                "Confirm the solution type."
            ]
        },
        {
            text: "Design and Solve a Pyramid with Limited Information",
            pyramid: [
                "", "", "", "", "", 
                "", "", "", "", 
                "", "", "", 
                "", "", 
                ""
            ],
            hints: [
                "Choose bottom row numbers that ensure unique solution.",
                "Ensure all other values align with pyramid rule."
            ]
        }
    ],
    C: [
        {
            text: "Understanding Systems of Equations",
            vars: ["x", "y"],
            hints: [
                "Substitution Method: Solve for one variable first (e.g., rewrite x in terms of y) then substitute into the second equation.",
                "Elimination Method: Add or subtract the two equations to cancel out one of the variables.",
                "Checking Your Solution: After solving for x and y, substitute them back into both equations to ensure they are correct."
            ]
        },
        {
            text: "Updating the Pyramid After Changing a Bottom Number",
            pyramid: [
                "5", "", "", "",
                "", "", "",
                "",
                ""
            ],
            hints: [
                "Start from the bottom row—change 2 to a 3, then recalculate the brick directly above it.",
                "Move upward step by step, ensuring that every brick is updated according to the sum rule."
            ]
        },
        {
            text: "How Are the Bottom Numbers Related to the Top Number?",
            pyramid: [
                "", "", "", "", "",
                "", "", "", "",
                "",
                ""
            ],
            hints: [
                "Assign variables (a, b, c, d) to the unknown bottom-row numbers.",
                "Use the pyramid rule to express how these numbers add up layer by layer.",
                "Your final equation should be in the form: A·a+B·b+ C·c+D·d +E·13 =280"
            ]
        },
        {
            text: "Where Is the Mistake in This Algebraic Pyramid?",
            equations: [ "1. a + b = c", "2. b + c = d" ],
            hints: [
                "Use the pyramid rule: Every brick must be the sum of the two bricks directly below it.",
                "Write equations for each level to verify that the sums match.",
                "Identify where the equation does not hold."
            ]
        },
        {
            text: "Solve for the Missing Numbers in the Pyramid",
            pyramid: [
                "", "", "", "", 
                "", "", "", 
                "", "", 
                ""
            ],
            vars: ["a", "b", "c", "d"],
            hints: [
                "Assign variables: Let the bottom row be a, b, c, d, and define each brick above as the sum of the two below it.",
                "Write equations: Express all bricks from the first to the fourth row in terms of a, b, c, and d.",
                "Use the given values: Set up equations using 31, 75, and 280 to link the bottom row to the top.",
                "Solve step by step: Use substitution or elimination to find the values of a, b, c, and d."
            ]
        },
        {
            text: "Design and Solve a Pyramid with Limited Information",
            pyramid: [
                "", "", "", "", "", 
                "", "", "", "", 
                "", "", "", 
                "", "", 
                ""
            ],
            hints: [
                "Choose bottom row numbers that ensure unique solution.",
                "Fill in the rest of the pyramid according to the rules."
            ]
        }
    ]
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadQuestion() {
    const category = getQueryParam("category");
    const questionIndex = parseInt(getQueryParam("question")) - 1;

    document.getElementById("questionNumber").innerText = `${category}${questionIndex + 1}:`;
    const question = questionData[category][questionIndex];

    document.getElementById("questionText").innerText = question.text;
    document.getElementById("hintList").innerHTML = question.hints.map((hint, index) => `<li>${index + 1}. ${hint}</li>`).join("");

    showPyramid(category, questionIndex);
    showChoices(category, questionIndex);

    if (question.vars) {
        showVariablesInput(question.vars);
    }
}

function showPyramid(category, questionIndex) {
    const pyramidData = questionData[category][questionIndex].pyramid;
    if (pyramidData) {
        const pyramidContainer = document.getElementById("pyramidContainer");
        pyramidContainer.innerHTML = createPyramidHTML(pyramidData);
    }
}

function createPyramidHTML(pyramidData) {
    let html = "<div class='pyramid'>";
    let levelSize = 5;
    let htmlIndex = 0;

    for (let i = levelSize; i >= 1; i--) {
        html += "<div class='pyramid-row'>";
        for (let j = 0; j < i; j++) {
            html += `<input type="text" value="${pyramidData[htmlIndex++]}" class="pyramid-input">`;
        }
        html += "</div>";
    }

    html += "</div>";
    return html;
}

function showChoices(category, questionIndex) {
    const choicesData = questionData[category][questionIndex].choices;
    if (choicesData) {
        const choicesContainer = document.getElementById("choicesContainer");
        choicesContainer.style.display = "block";
        choicesContainer.innerHTML = choicesData.map(choice => `<label><input type="radio" name="choice"> ${choice}</label><br>`).join("");
        document.getElementById("answerExplanation").style.display = "block";
    }
}

function showVariablesInput(vars) {
    const pyramidContainer = document.getElementById("pyramidContainer");
    pyramidContainer.innerHTML = vars.map(variable => `<label>${variable}=<input type="text" value=""></label>`).join("<br>");
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
