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
                [5, 13]
            ],
            hints: [
                "Start from the bottom row—you already know the first number (5).",
                "Move upward step by step, using the sum rule.",
                "Check your calculations—each brick must be the sum of the two below it."
            ]
        },
        {
            number: "A2",
            text: "Question 2: Identify the Solution Type of the 5-Level Pyramid",
            task: "In our pyramid problem, we have three different types of solutions...",
            mainTask: "Determine whether the pyramid has a unique solution, multiple solutions, or no solution.",
            choices: ["A. Unique solution", "B. Multiple solutions", "C. No solution"],
            hints: [
                "Try to find one solution—fill in the missing numbers step by step using the pyramid rule.",
                "Check if you can find another solution—try adjusting some of the missing numbers while still following the pyramid rule.",
                "Determine the solution type—if multiple valid solutions exist, the problem has multiple solutions; if only one solution is possible, it has a unique solution; if no numbers satisfy the pyramid rule, it has no solution."
            ]
        },
        {
            number: "A3",
            text: "Question 3: Changing the Position of the Additional Given Number",
            task: "In the previous problem A1, we explored how adding an extra number to the bottom row affected the solution type...",
            mainTask: "Try to solve the following pyramid by filling in the missing values while following the pyramid rule.",
            pyramidStructure: [
                [null, null, null, null, null],
                [null, null, null, null],
                [null, null, null],
                [null, null],
                [5, 13]
            ],
            hints: [
                "Start from the bottom row—the given number (5) is already there. Use the rule to find the next brick in that row.",
                "Move upward step by step, ensuring that every brick is updated according to the sum rule."
            ]
        },
        {
            number: "A4",
            text: "Question 4: The Mysterious Brick Pyramid Challenge",
            task: "You are a puzzle master at the Mathematical Pyramid Tournament. Two contestants, A and B, have submitted their completed 5-level Brick Pyramid solutions...",
            mainTask: "Verify whether both pyramids are correct; can you fix the mistakes?",
            choices: ["A. A is correct", "B. B is correct", "C. Both A and B", "D. Neither A nor B"],
            pyramidStructure: [
                [null, null, null, null, 280],
                [null, null, null, 75],
                [null, 31, null],
                [5, 13]
            ],
            hints: [
                "Check each row carefully—does every brick follow the sum rule?",
                "If an error is found, modify the necessary numbers while keeping the pyramid consistent."
            ]
        },
        {
            number: "A5",
            text: "Question 5: Finding the Minimum Information Needed for a Unique Solution",
            task: "For a 5-level pyramid, the number of valid solutions can vary...",
            mainTask: "What's the least amount of given values required to create a unique-solution pyramid?",
            choices: ["A. 4", "B. 5", "C. 6"],
            hints: [
                "Analyze patterns...",
                "Think about where the arbitrariness of the solution comes from."
            ]
        },
        {
            number: "A6",
            text: "Question 6: Design and Solve a Pyramid with Limited Information",
            task: "In this challenge, you will design a pyramid with only 5 known numbers...",
            mainTask: "Can you create a pyramid with 5 given numbers? Build a complete pyramid by choosing 5 numbers for the bottom row and filling in all other values using the pyramid rule to ensure that your pyramid has a solution.",
            pyramidStructure: [
                [null, null, null, null, null],
                [null, null, null, null],
                [null, null, null],
                [null, null],
                [5, null, null, null, null]
            ],
            hints: [
                "Choose bottom row numbers that ensure unique solution.",
                "Fill in the rest according to the pyramid rule."
            ]
        }
    ],
    B: [
        {
            number: "B1",
            text: "Question 7: Solve for the Missing Values in a 3-Level Pyramid",
            task: "Apply logical reasoning to fill in the missing values of a simplified 3-level pyramid...",
            mainTask: "Determine all missing values and complete the pyramid.",
            pyramidStructure: [
                [null, null, 10],
                [null, 5],
                [5]
            ],
            hints: [
                "Start from the bottom—you know one value (5), use it to calculate the rest.",
                "Check the calculations as you move up the pyramid.",
                "Ensure each brick follows the sum rule."
            ]
        },
        {
            number: "B2",
            text: "Question 8: A 4-Level Pyramid with a Unique Solution",
            task: "Determine if the given 4-level pyramid has a unique solution...",
            mainTask: "Check if this pyramid can have only one solution.",
            choices: ["A. Yes", "B. No"],
            pyramidStructure: [
                [null, null, null, 20],
                [null, null, 10],
                [null, 5],
                [5]
            ],
            hints: [
                "Check sum calculations to ensure only one configuration is possible.",
                "Consider adjusting some numbers and see if the pyramid rule holds."
            ]
        },
        {
            number: "B3",
            text: "Question 9: A 4-Level Pyramid with a Unique Solution (Harder Version)",
            task: "Attempt to solve the harder pyramid with fewer initial given numbers...",
            mainTask: "Is there only one possible configuration?",
            choices: ["A. Yes", "B. No"],
            pyramidStructure: [
                [null, null, null, null],
                [null, null, null],
                [null, 5],
                [5]
            ],
            hints: [
                "The original bricks are unknown, ensure working upward keeps pyramid rule intact.",
                "Assign values step-by-step once bottom values revealed."
            ]
        },
        {
            number: "B4",
            text: "Question 10: Identifying Different Types of Pyramid Solutions",
            task: "Given different pyramid configurations, identify their solution types...",
            mainTask: "Which type of solution does each pyramid represent?",
            choices: ["A. Unique Solution", "B. Multiple Solutions", "C. No Solution"],
            pyramidStructure: [
                [null, null, null, null, null],
                [null, null, null, null],
                [null, null, null],
                [null, null],
                [5, null, null, null, null]
            ],
            hints: [
                "Check pyramid row stacks to identify potential errors or correct paths.",
                "Each brick should validate the pyramid's rule and indicate possible adjustments."
            ]
        },
        {
            number: "B5",
            text: "Question 11: Solve the 5-Level Pyramid and Identify Its Solution Type",
            task: "Follow the sum rule to solve the pyramid and determine its solution type...",
            mainTask: "Find the missing values and identify the pyramid's solution.",
            choices: ["A. Unique Solution", "B. Multiple Solutions", "C. No Solution"],
            pyramidStructure: [
                [null, null, null, null, null],
                [null, null, null, null],
                [null, null, null],
                [null, null],
                [5, null, null, null, null]
            ],
            hints: [
                "Prepare to calculate each step upward.",
                "Ensure final sum reflects the pyramid rule fully."
            ]
        },
        {
            number: "B6",
            text: "Question 12: Design and Solve a Pyramid with Limited Information",
            task: "Create a 5-level pyramid with minimal given information...",
            mainTask: "Build a pyramid knowing only a few values.",
            pyramidStructure: [
                [null, null, null, null, null],
                [null, null, null, null],
                [null, null, null],
                [null, null],
                [5, null, null, null, null]
            ],
            hints: [
                "Design the bottom row with values that secure a consistent solution.",
                "Fill others using the pyramid rule accurately."
            ]
        }
    ],
    C: [
        {
            number: "C1",
            text: "Question 13: Understanding Systems of Equations",
            task: "Work through the equations that relate the bottom row to the top...",
            mainTask: "Solve the equations linking each row.",
            pyramidStructure: [
                [null, null, null, 280],
                [null, null, 75],
                [null, 31],
                [5, 13]
            ],
            hints: [
                "Translate pyramid relationships into a series of equations.",
                "Systematically solve for unknowns ensuring pyramid rule."
            ]
        },
        {
            number: "C2",
            text: "Question 14: Updating the Pyramid After Changing a Bottom Number",
            task: "Modify the pyramid by altering a bottom row number and recalculate...",
            mainTask: "Calculate after updating bottom brick values.",
            pyramidStructure: [
                [null, null, null, 280],
                [null, null, 75],
                [null, 31],
                [5, 13]
            ],
            hints: [
                "Start by changing the known value, observe impact moving upward.",
                "Recalculate with updated values ensuring proper pyramid function."
            ]
        },
        {
            number: "C3",
            text: "Question 15: How Are the Bottom Numbers Related to the Top Number?",
            task: "Analyze how bottom numbers influence the top of the pyramid...",
            mainTask: "Reveal relationships through the calculations.",
            pyramidStructure: [
                [null, null, null, 280],
                [null, null, 75],
                [null, 31],
                [5, 13]
            ],
            hints: [
                "Assign unknown variables and work through relations.",
                "Sum values proceeding upward showing consistent rule."
            ]
        },
        {
            number: "C4",
            text: "Question 16: Where Is the Mistake in This Algebraic Pyramid?",
            task: "Find errors in the arithmetic pyramid involving algebraic steps...",
            mainTask: "Detect errors in calculations.",
            pyramidStructure: [
                [null, null, null, 280],
                [null, null, 75],
                [null, 31],
                [5, 13]
            ],
            hints: [
                "Review arithmetic placements for errors disrupting pyramid rule.",
                "Correct mistakes ensuring properly structured sums."
            ]
        },
        {
            number: "C5",
            text: "Question 17: Solve for the Missing Numbers in the Pyramid",
            task: "Following the pyramid rule, fill in the missing values systematically.",
            mainTask: "Find values ensuring rule consistency.",
            pyramidStructure: [
                [null, null, null, 280],
                [null, null, 75],
                [null, 31],
                [5, 13]
            ],
            hints: [
                "Progress upward validating each addition.",
                "Each layer and sum must fulfill pyramid logic."
            ]
        },
        {
            number: "C6",
            text: "Question 18: Design and Solve a Pyramid with Limited Information",
            task: "Construct a pyramid ensuring solutions despite limited known values...",
            mainTask: "Craft pyramid matching restricted information.",
            pyramidStructure: [
                [null, null, null, 280],
                [null, null, 75],
                [null, 31],
                [5, 13]
            ],
            hints: [
                "Strategize bottom row for logical sum arrangement.",
                "Consistently elevate values maintaining rule validity."
            ]
        }
    ]
};

let currentQuestionIndex = 0;
let category = '';

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadQuestion() {
    category = getQueryParam("category") || 'A'; 
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
    const questionList = questionData[category];
    if (currentQuestionIndex < questionList.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("You've reached the last question for this category.");
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
