const questionData = {
    "A1": {
        "type": "A1-Question 1: Solve the 5-Level Pyramid with a Given Value",
        "task": (
            "Welcome to the Brick Pyramid Challenge! In this problem, you will apply logical reasoning and step-by-step calculations to fill in missing values in a 5-level pyramid.\n" +
            "Each brick follows a simple rule:\n" +
            "Every brick is the sum of the two bricks directly below it.\n" +
            "In this pyramid, one value is already given—the bottom-left brick is 5.\n" +
            "Your task is to fill in the missing numbers so that the pyramid follows the rule."
        ),
        "img": "",
        "hints": [
            "Start from the bottom row—you already know the first number (5). Use the rule to find the next brick in that row.",
            "Move upward step by step, using the sum rule to fill in the second row, then the third, and so on.",
            "Check your calculations—each brick must be the sum of the two below it."
        ],
        "pyramidStructure": [
            [280],
            [null, null],
            [null, 75, null],
            [31, null, null, null],
            [5, null, 13, null, 1]
        ],
        "pyramidColors": [
            [false],
            [true, true],
            [true, false, true],
            [false, true, true, true],
            [false, true, false, true, false]
        ],
        "solutionsDetails": "Main task: Use the pyramid rule to determine all missing values and complete the pyramid."
    },
    "A2": {
        "type": "A2-Question 2: Identify the Solution Type of the 5-Level Pyramid",
        "task": (
            "In our pyramid problem, we have three different types of solutions:\n" +
            "1. Unique Solution: The pyramid has a unique solution, meaning that there is only one possible way to fill in the missing values.\n" +
            "2. Multiple Solutions: The pyramid has multiple solutions, meaning that there are many different possible ways to fill in the missing values.\n" +
            "3. No Solution: The pyramid has no solution, meaning that there is no possible way to assign values to the missing bricks while satisfying the pyramid rule."
        ),
        "img": "img/A/a2.png",
        "hints": [
            "Try to find one solution—fill in the missing numbers step by step using the pyramid rule.",
            "Check if you can find another solution—try adjusting some of the missing numbers while still following the pyramid rule.",
            "Determine the solution type—if multiple valid solutions exist, the problem has multiple solutions; if only one solution is possible, it has a unique solution; if no numbers satisfy the pyramid rule, it has no solution."
        ],
        "choices": [
            "A. Unique Solution",
            "B. Multiple Solutions",
            "C. No Solution"
        ],
        "solutionsDetails": "Main task: Whether the above pyramid has a unique solution, multiple solutions, or no solution.",
        "additionalInput": "Please explain your reasoning."
    },
    "A3": {
        "type": "A3-Question 3: Changing the Position of the Additional Given Number",
        "task": (
            "In the previous problem A1, we explored how adding an extra number to the bottom row affected the solution type of the pyramid.\n" +
            "Now, let's take a step further: What happens when we change the position of this additional number?"
        ),
        "img": "",
        "hints": [],
        "pyramidStructure": [
            [280],
            [null, null],
            [null, 75, null],
            [31, null, null, null],
            [null, null, 13, null, 1]
        ],
        "pyramidColors": [
            [false],
            [true, true],
            [true, false, true],
            [false, true, true, true],
            [true, true, false, true, false]
        ],
        "solutionsDetails": "Main task: Try to solve the following pyramid by filling in the missing values while following the pyramid rule.",
        "additionalInput": "Please explain how you found the solution."
    },
    "A4": {
        "type": "A4-Question 4: The Mysterious Brick Pyramid Challenge",
        "task": (
            "You are a puzzle master at the Mathematical Pyramid Tournament. Two contestants, A and B, have submitted their completed 5-level Brick Pyramid solutions. However, the judges are unsure whether their solutions are correct.\n" +
            "Your role? Act as the final verifier—check their pyramids, and correct any mistakes."
        ),
        "img": "img/A/a4.png",
        "hints": [],
        "choices": [
            "A: A is correct",
            "B: B is correct",
            "C: Both A and B",
            "D: Neither A nor B"
        ],
        "solutionsDetails": "Main task: Verify whether both pyramids are correct, and can you fix the mistakes.",
        "additionalInput": "Please explain your reason(s)."
    },
    "A5": {
        "type": "A5-Question 5: Finding the Minimum Information Needed for a Unique Solution",
        "task": (
            "For a 5-level pyramid, the number of valid solutions can vary. Depending on the given values, the pyramid can have:\n" +
            "Unique Solution: The pyramid has a unique solution, meaning that there is only one possible way to fill in the missing values.\n" +
            "Multiple Solutions: The pyramid has multiple solutions, meaning that there are many different possible ways to fill in the missing values.\n" +
            "No Solution: The pyramid has no solution, meaning that there is no possible way to assign values to the missing bricks while satisfying the pyramid rule."
        ),
        "img": "img/A/a5.png",
        "choices": ["A. 4", "B. 5", "C. 6"],
        "solutionsDetails": ""
    },
    "A6": {
        "type": "A6-Question 6: Design and Solve a Pyramid with Limited Information",
        "task": "In this challenge, you will design a pyramid with only 5 known numbers.",
        "img": "",
        "hints": [],
        "pyramidStructure": [
            [null],
            [null, null],
            [null, null, null],
            [null, null, null, null],
            [null, null, null, null, null]
        ],
        "pyramidColors": [
            [true],
            [true, true],
            [true, true, true],
            [true, true, true, true],
            [true, true, true, true, true]
        ],
        "solutionsDetails": "Main task: Can you create a pyramid with 5 given numbers? Build a complete pyramid by choosing 5 numbers for the bottom row and filling in all other values using the pyramid rule to ensure that your pyramid has a solution."
    },
    "B1": {
        "type": "B1-Question 1: Solve for the Missing Values in a 3-Level Pyramid",
        "task": (
            "The Brick Pyramid follows this rule:\n" +
            "Each brick in the pyramid is the sum of the two bricks directly below it.\n" +
            "Here is a 3-level pyramid with missing numbers:"
        ),
        "img": "",
        "hints": [
            "Look at the numbers you have and how they relate to each other.",
            "Use the pyramid rule to determine the missing values.",
            "Work step by step, checking your calculations."
        ],
        "pyramidStructure": [
            [280],
            [145, null],
            [null, 75, null]
        ],
        "pyramidColors": [
            [false],
            [false, true],
            [true, false, true]
        ],
        "solutionsDetails": "Main task: Find the missing numbers and fill in the pyramid completely."
    },
    "B2": {
        "type": "B2-Question 2: A 4-Level Pyramid with a Unique Solution",
        "task": (
            "In algebra, a system of equations can have different types of solutions:\n" +
            "One unique solution: There is only one possible set of numbers that satisfies the pyramid rule.\n" +
            "Multiple solutions: There are many different sets of numbers that could work.\n" +
            "No solution: The given numbers contradict each other, making it impossible to find valid values.\n" +
            "The pyramid below has a unique solution, meaning there is only one possible way to fill in the missing values."
        ),
        "img": "",
        "hints": [
            "Use the pyramid rule to determine the missing numbers."
        ],
        "pyramidStructure": [
            [280],
            [null, 131],
            [null, 75, null],
            [31, null, null, null]
        ],
        "pyramidColors": [
            [false],
            [true, false],
            [true, false, true],
            [false, true, true, true]
        ],
        "choices": ["Yes", "No"],
        "solutionsDetails": "Main task: Find the missing numbers and complete the pyramid. Then, confirm that only one solution exists."
    },
    "B3": {
        "type": "B3-Question 3: A 4-Level Pyramid with a Unique Solution (Harder Version)",
        "task": (
            "In algebra, a system of equations can have different types of solutions:\n" +
            "One unique solution: There is only one possible set of numbers that satisfies the pyramid rule.\n" +
            "Multiple solutions: There are many different sets of numbers that could work.\n" +
            "No solution: The given numbers contradict each other, making it impossible to find valid values.\n" +
            "The pyramid below has a unique solution, meaning there is only one possible way to fill in the missing values."
        ),
        "img": "",
        "hints": [
            "Use the pyramid rule to determine the missing numbers.",
            "If you cannot determine a missing number directly, assign variables to the two unknown numbers in the bottom row (e.g., a, b), and use the given numbers (75 and 280) to create equations that relate them. Solve step by step to see if there is only one possible solution for a and b."
        ],
        "pyramidStructure": [
            [280],
            [null, null],
            [null, 75, null],
            [31, null, null, 24]
        ],
        "pyramidColors": [
            [false],
            [true, true],
            [true, false, true],
            [false, true, true, false]
        ],
        "choices": ["Yes", "No"],
        "solutionsDetails": "Main task: Find the missing numbers and complete the pyramid. Then, confirm that only one solution exists."
    },
    "B4": {
        "type": "B4-Question 4: Identifying Different Types of Pyramid Solutions",
        "task": (
            "In our pyramid problem, we have three different types of solutions:\n" +
            "Unique Solution: The pyramid has a unique solution, meaning that there is only one possible way to fill in the missing values.\n" +
            "Multiple Solutions: The pyramid has multiple solutions, meaning that there are many different possible ways to fill in the missing values.\n" +
            "No Solution: The pyramid has no solution, meaning that there is no possible way to assign values to the missing bricks while satisfying the pyramid rule."
        ),
        "img": "img/B/b4.png",
        "hints": [],
        "choices": ["A. Unique Solution", "B. Multiple Solutions", "C. No Solution"],
        "solutionsDetails": "Main task: Determine solution types for each pyramid."
    },
    "B5": {
        "type": "B5-Question 5: Solve the 5-Level Pyramid and Identify Its Solution Type",
        "task": (
            "In our pyramid problem, we also have three different types of solutions:\n" +
            "Unique Solution: The pyramid has a unique solution, meaning there is only one possible way to fill in the missing values.\n" +
            "Multiple Solutions: The pyramid has multiple solutions, meaning that there are many different possible ways to fill in the missing values.\n" +
            "No Solution: The pyramid has no solution, meaning that there is no possible way to assign values to the missing bricks while satisfying the pyramid rule."
        ),
        "img": "",
        "hints": [],
        "pyramidStructure": [
            [280],
            [null, null],
            [null, 75, null],
            [31, null, null, null],
            [null, null, 13, null, null]
        ],
        "pyramidColors": [
            [false],
            [true, true],
            [true, false, true],
            [false, true, true, true],
            [true, true, false, true, true]
        ],
        "choices": ["A. Unique Solution", "B. Multiple Solutions", "C. No Solution"],
        "solutionsDetails": "Main task: Solve for the missing values and identify the solution type."
    },
    "B6": {
        "type": "B6-Question 6: Design and Solve a Pyramid with Limited Information",
        "task": "In this challenge, you will design a pyramid with only 5 known numbers.",
        "img": "",
        "hints": [],
        "pyramidStructure": [
            [null],
            [null, null],
            [null, null, null],
            [null, null, null, null],
            [null, null, null, null, null]
        ],
        "pyramidColors": [
            [true],
            [true, true],
            [true, true, true],
            [true, true, true, true],
            [true, true, true, true, true]
        ],
        "solutionsDetails": "Main task: Create and ensure your pyramid has a solution."
    },
   "C1": {
        "type": "C1-Question 1: Understanding Systems of Equations",
        "task": (
            "Before solving the Brick Pyramid, let's review how to solve a system of equations.\n" +
            "A system of equations is a set of two or more equations that have the same variables.\n" +
            "The goal is to find values for the variables that make all the equations true."
        ),
        "img": "",
        "hints": [
            "Substitution Method: Solve for one variable first (e.g., rewrite x in terms of y), then substitute into the second equation.",
            "Elimination Method: Add or subtract the two equations to cancel out one of the variables.",
            "Checking Your Solution: After solving for x and y, substitute them back into both equations to ensure they are correct."
        ],
        "solutionsDetails": "Main task: Consider the following system: x+y=10, x−y=2. Find the values of x and y.",
        "variables": ["x", "y"]
    },
    "C2": {
        "type": "C2-Question 2: Updating the Pyramid After Changing a Bottom Number",
        "task": "Start from the bottom row—change 2 to a 3, then recalculate the brick directly above it. Move upward step by step, ensuring that every brick is updated according to the sum rule.",
        "img": "img/C/c2.png",
        "hints": [],
         "pyramidStructure": [
            [null],
            [null, null],
            [null, null, null],
            [null, null, null, null],
            [1, 2, 3, 4, 5]
        ],
        "pyramidColors": [
            [true],
            [true, true],
            [true, true, true],
            [true, true, true, true],
            [false, false, false, false, false]
        ],
        "solutionsDetails": "Main task: Ensure that every brick is updated according to the pyramid rule."
    },
    "C3": {
        "type": "C3-Question 3: How Are the Bottom Numbers Related to the Top Number?",
        "task": (
            "In the Brick Pyramid, each number follows this rule:\n" +
            "Each number is the sum of the two numbers directly below it.\n" +
            "We know that the top number is 280, but the bottom row numbers are missing."
        ),
        "img": "img/C/c3.png",
        "hints": [
            "Assign variables (a, b, c, d) to the unknown bottom-row numbers.",
            "Use the pyramid rule to express how these numbers add up layer by layer.",
            "Your final equation should be in the form: A⋅a + B⋅b + C⋅c + D⋅d + E⋅13 = 280"
        ],
        "solutionsDetails": "Main task: Formulate the equation that represents the relationship between the bottom row and the top number.",
        "equationVariables": ["a", "b", "c", "d", "E"]
    },
    "C4": {
        "type": "C4-Question 4: Where Is the Mistake in This Algebraic Pyramid?",
        "task": (
            "The Brick Pyramid follows this rule:\n" +
            "Each brick’s value is the sum of the two bricks directly below it.\n" +
            "Below is a pyramid where all numbers are expressed as variables. However, the equations do not correctly follow the pyramid rule."
        ),
        "img": "img/C/c4.png",
        "hints": [
            "Use the pyramid rule: Every brick must be the sum of the two bricks directly below it.",
            "Write equations for each level to verify that the sums match.",
            "Identify where the equation does not hold.",
            "Solve for the correct value."
        ],
        "solutionsDetails": "Main task: Identify and correct the incorrect equation in this pyramid."
    },
    "C5": {
        "type": "C5-Question 5: Solve for the Missing Numbers in the Pyramid",
        "task": "Below is a pyramid where some numbers are unknown. Use algebra to solve for the missing values in the bottom row.",
        "img": "img/C/c5.png",
        "hints": [
            "Assign variables: Let the bottom row be a, b, c, d, and define each brick above as the sum of the two below it.",
            "Write equations: Express all bricks from the first to the fourth row in terms of a, b, c, and d using the pyramid rule.",
            "Use the given values: Set up equations using 31, 75, and 280 to connect the bottom row to the top.",
            "Solve step by step: Use substitution or elimination to find the values of a, b, c, and d."
        ],
        "solutionsDetails": "Main task: Solve for the unknown values in the bottom row using a system of equations."
    },
    "C6": {
        "type": "C6-Question 6: Design and Solve a Pyramid with Limited Information",
        "task": "In this challenge, you will design a pyramid with only 5 known numbers.",
        "img": "",
        "hints": [],
        "pyramidStructure": [
            [null],
            [null, null],
            [null, null, null],
            [null, null, null, null],
            [null, null, null, null, null]
        ],
        "pyramidColors": [
            [true],
            [true, true],
            [true, true, true],
            [true, true, true, true],
            [true, true, true, true, true]
        ],
        "solutionsDetails": "Main task: Create and complete a pyramid by choosing 5 numbers for the bottom row, ensuring it can be filled using the pyramid rule."
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category') || 'C';
    const questionNumber = parseInt(urlParams.get('question')) || 1;
    const questionId = `${category}${questionNumber}`;
    console.log('URL Params:', { category, questionNumber, questionId }); // 调试输出
    loadQuestion(questionId);

    // 如果是最后一道题，则显示提交按钮
    const LAST_QUESTION_NUMBER = 6; // 需要根据实体定义实际最后题目编号
    if (questionNumber === LAST_QUESTION_NUMBER) {
        document.getElementById('submitButtonContainer').style.display = 'block';
    }
});

function setupHints(hints) {
    const hintsContainer = document.getElementById('hintsContainer');
    hintsContainer.innerHTML = '';  // 清空现有的提示

    hints.forEach((hint, index) => {
        const hintElement = document.createElement('div');
        hintElement.className = 'hint';
        hintElement.innerText = hint.text;
        hintElement.addEventListener('click', () => {
            // 显示提示内容
            alert(hint.text);
        });
        hintsContainer.appendChild(hintElement);
    });
}


function loadQuestion(questionId) {
    const question = questionData[questionId];
    if (!question) {
        goBack();
        return;
    }
    
    document.getElementById('questionType').innerText = question.type;
    document.getElementById('questionText').innerText = question.task.replace(/\n/g, "\n");
    document.getElementById('taskDetails').innerText = question.solutionsDetails.replace(/\n/g, "\n");
    
    if (question.pyramidStructure && question.pyramidColors) {
        renderPyramid(question.pyramidStructure, question.pyramidColors);
    } else {
        document.getElementById('interactiveArea').innerHTML = '';
    }

    setupHints(question.hints);

    if (question.additionalInput) {
        document.getElementById('explanation').style.display = 'block';
    } else {
        document.getElementById('explanation').style.display = 'none';
    }
}

function renderPyramid(pyramidStructure, pyramidColors) {
    const pyramidContainer = document.getElementById('interactiveArea');
    pyramidContainer.innerHTML = '';

    pyramidStructure.forEach((row, rowIndex) => {
        const pyramidRow = document.createElement('div');
        pyramidRow.className = 'pyramid-row';

        row.forEach((value, colIndex) => {
            const box = document.createElement('div');
            box.className = 'box';
            const editable = pyramidColors[rowIndex][colIndex];

            if (editable) {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = value !== null ? value : '';
                box.appendChild(input);
            } else {
                box.textContent = value !== null ? value : '';
            }
            
            pyramidRow.appendChild(box);
        });

        pyramidContainer.appendChild(pyramidRow);
    });
}

function navigate(next) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || 'C';
    let questionNumber = parseInt(params.get('question')) || 1;
    questionNumber += next ? 1 : -1;

    const nextQuestionId = `${category}${questionNumber}`;

    if (questionData[nextQuestionId]) {
        history.pushState(null, '', `?category=${category}&question=${questionNumber}`);
        loadQuestion(nextQuestionId);
    } else {
        alert("No more questions available.");
    }
}

async function submitAnswers() {
    const userAnswers = {
        taskDetails: document.getElementById('taskDetails').innerText,
        explanation: document.getElementById('explanation').value
    };

    // GitHub API 操作
    try {
        const fileResponse = await fetch(`https://api.github.com/repos/<owner>/<repo>/contents/results.json`, {
            headers: {
                Authorization: `token ${token}`
            }
        });

        if (!fileResponse.ok) {
            throw new Error('Failed to fetch file information.');
        }

        const file = await fileResponse.json();
        const sha = file.sha;

        const encodedContent = btoa(JSON.stringify(userAnswers));

        const result = await fetch(`https://api.github.com/repos/<owner>/<repo>/contents/results.json`, {
            method: 'PUT',
            headers: {
                Authorization: `token ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Update results',
                content: encodedContent,
                sha: sha
            })
        });

        if (result.ok) {
            window.location.href = 'end.html';
        } else {
            throw new Error('Failed to update file.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
