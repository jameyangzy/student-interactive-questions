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
                [null, 31, null],
                [5, 13, null, null]
            ],
            hints: [
                "Start from the bottom row—you already know the first number (5). Use the rule to find the next brick in that row.",
                "Move upward step by step, using the sum rule to fill in the second row, then the third, and so on.",
                "Check your calculations—each brick must be the sum of the two below it."
            ]
        },
        {
            number: "A2",
            text: "Question 2: Identify the Solution Type of the 5-Level Pyramid",
            task: "In our pyramid problem, we have three different types of solutions:\n● Unique Solution: The pyramid has a unique solution, meaning that there is only one possible way to fill in the missing values.\n● Multiple Solutions: The pyramid has multiple solutions, meaning that there are many different possible ways to fill in the missing values.\n● No Solution: The pyramid has no solution, meaning that there is no possible way to assign values to the missing bricks while satisfying the pyramid rule.",
            mainTask: "Whether the above pyramid has a unique solution, multiple solutions, or no solution.",
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
            task: "In the previous problem A1, we explored how adding an extra number to the bottom row affected the solution type of the pyramid. Now, let's take a step further: What happens when we change the position of this additional number?",
            mainTask: "Try to solve the following pyramid by filling in the missing values while following the pyramid rule.",
            pyramidStructure: [
                [null, null, null, null, null],
                [null, null, null, null],
                [null, null, null],
                [null, null],
                [null, null, null, null]
            ],
            hints: [
                "Start from the bottom row—you already know the first number (5). Use the rule to find the next brick in that row.",
                "Move upward step by step, using the sum rule to fill in the second row, then the third, and so on.",
                "Check your calculations—each brick must be the sum of the two below it."
            ]
        },
        {
            number: "A4",
            text: "Question 4: The Mysterious Brick Pyramid Challenge",
            task: "You are a puzzle master at the Mathematical Pyramid Tournament. Two contestants, A and B, have submitted their completed 5-level Brick Pyramid solutions. However, the judges are unsure whether their solutions are correct. Your role? Act as the final verifier—check their pyramids, and correct any mistakes.",
            mainTask: "Verify whether both pyramids are correct, can you fix the mistakes?",
            choices: ["A. A is correct", "B. B is correct", "C. Both A and B", "D. Neither A nor B"],
            pyramidStructure: [
                [null, null, null, null, 280],
                [null, null, null, 75],
                [null, 31, null],
                [5, 13, null, null]
            ],
            hints: [
                "Check each row carefully—does every brick follow the sum rule?",
                "If an error is found, modify the necessary numbers while keeping the pyramid consistent."
            ]
        },
        {
            number: "A5",
            text: "Question 5: Finding the Minimum Information Needed for a Unique Solution",
            task: "For a 5-level pyramid, the number of valid solutions can vary. Depending on the given values, the pyramid can have:\n● Unique Solution: The pyramid has a unique solution, meaning that there is only one possible way to fill in the missing values.\n● Multiple Solutions: The pyramid has multiple solutions, meaning that there are many different possible ways to fill in the missing values.\n● No Solution: The pyramid has no solution, meaning that there is no possible way to assign values to the missing bricks while satisfying the pyramid rule. Below are three pyramids, each representing one of these cases.",
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
            task: "In this challenge, you will design a pyramid with only 5 known numbers.",
            mainTask: "Can you create a pyramid with 5 given numbers? Build a complete pyramid by choosing 5 numbers for the bottom row and filling in all other values using the pyramid rule to ensure that your pyramid has a solution.",
            pyramidStructure: [
                [null, null, null, null, null],
                [null, null, null, null],
                [null, null, null],
                [null, null],
                [null, null, null, null]
            ],
            hints: [
                "Choose bottom row numbers that ensure unique solution.",
                "Fill in the rest according to the pyramid rule."
            ]
        }
    ],
    B: [
        // B类别的问题数据...
    ],
    C: [
        // C类别的问题数据...
    ]
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
