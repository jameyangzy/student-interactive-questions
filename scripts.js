const questionData = {
    "A1": {
        "type": "pyramid",
        "task": "**Solve the 5-Level Pyramid with a Given Value**",
        "details": "Welcome to the Brick Pyramid Challenge! In this problem, you will apply logical reasoning and step-by-step calculations to fill in missing values in a 5-level pyramid. ",
        "details":"Each brick follows a simple rule: ",
        "details":"** Every brick is the sum of the two bricks directly below it.**",//居中加粗
        "details":"In this pyramid, one value is already given—the bottom-left brick is 5. Your task is to fill in the missing numbers so that the pyramid follows the rule.",
        "hints": [
            "1. Start from the bottom row—you already know the first number (5). Use the rule to find the next brick in that row.",
            "2. Move upward step by step, using the sum rule to fill in the second row, then the third, and so on.",
            "3. Check your calculations—each brick must be the sum of the two below it."
        ],
        "pyramidStructure": [
            [null],
            [null, null],
            [null, null, null],
            [null, null, null, null],
            [5, null, null, null, null]
        ],
        "solutionsDetails": "**Main task:** Use the pyramid rule to determine all missing values and complete the pyramid.\n**Answer mode:** Fill the numbers in the empty spaces of the pyramid."
    },
    "A2": {
        "type": "solutionType",
        "task": "**Identify the Solution Type of the 5-Level Pyramid**",
        "details": "In our pyramid problem, we have three different types of solutions: Unique Solution, Multiple Solutions, No Solution.",
        "hints": [
            "1. Try to find one solution—fill in the missing numbers step by step using the pyramid rule.",
            "2. Check if you can find another solution—try adjusting some of the missing numbers while still following the pyramid rule.",
            "3. Determine the solution type—if multiple valid solutions exist, the problem has multiple solutions; if only one solution is possible, it has a unique solution; if no numbers satisfy the pyramid rule, it has no solution."
        ],
        "choices": [
            "A. Unique Solution",
            "B. Multiple Solutions",
            "C. No Solution"
        ],
        "solutionsDetails": "**Main task:** Whether the above pyramid has a unique solution, multiple solutions, or no solution.\n**Answer mode:** Please explain the reason(s) in the text box."
    },
    "A3": {
        "type": "pyramidChange",
        "task": "**Changing the Position of the Additional Given Number**",
        "details": "In the previous problem A1, we explored how adding an extra number to the bottom row affected the solution type of the pyramid. Now, let's take a step further: What happens when we change the position of this additional number?",
        "hints": [
            "1. Try to solve the following pyramid by filling in the missing values while following the pyramid rule."
        ],
        "solutionsDetails": "**Answer mode:** Fill the numbers in the empty spaces of the pyramid.\n**Please explain how you found the solution in the text box.**"
    },
    "A4": {
        "type": "verifyPyramids",
        "task": "**The Mysterious Brick Pyramid Challenge**",
        "details": "You are a puzzle master at the Mathematical Pyramid Tournament. Two contestants, A and B, have submitted their completed 5-level Brick Pyramid solutions. However, the judges are unsure whether their solutions are correct. Verify whether both pyramids are correct, and can you fix the mistakes?",
        "choices": ["A: A is correct", "B: B is correct", "C: Both A and B", "D: Neither A nor B"],
        "hints": [
            "1. Check each row carefully—does every brick follow the sum rule?",
            "2. If an error is found, modify the necessary numbers while keeping the pyramid consistent."
        ],
        "solutionsDetails": "**Please explain your reason(s) in the text box.**\n**Answer mode:** Use a text box to determine if it is correct; if incorrect, specify which number and provide the correct number."
    },
    "A5": {
        "type": "findMinimumInfo",
        "task": "**Finding the Minimum Information Needed for a Unique Solution**",
        "details": "For a 5-level pyramid, the number of valid solutions can vary. Depending on the given values, the pyramid can have: Unique Solution, Multiple Solutions, No Solution. Below are three pyramids, each representing one of these cases.",
        "choices": ["A. 4", "B. 5", "C. 6"],
        "solutionsDetails": "**Main tasks:** What is the least amount of given values required to create a unique-solution pyramid?\n**Answer mode:** Please explain the rationale for your choice."
    },
    "A6": {
        "type": "designAndSolve",
        "task": "**Design and Solve a Pyramid with Limited Information**",
        "details": "In this challenge, you will design a pyramid with only 5 known numbers.",
        "hints": [
            "Can you create a pyramid with 5 given numbers? Build a complete pyramid by choosing 5 numbers for the bottom row and filling in all other values using the pyramid rule to ensure that your pyramid has a solution."
        ],
        "solutionsDetails": "**Answer mode:** Fill the pyramid with 5 known numbers and describe your pyramid design and why it works."
    },
    "B1": {
        "type": "pyramid",
        "task": "**Solve for the Missing Values in a 3-Level Pyramid**",
        "details": "The Brick Pyramid follows this rule: Each brick in the pyramid is the sum of the two bricks directly below it. Here is a 3-level pyramid with missing numbers.",
        "hints": [
            "1. Look at the numbers you have and how they relate to each other.",
            "2. Use the pyramid rule to determine the missing values.",
            "3. Work step by step, checking your calculations."
        ],
        "solutionsDetails": "**Main Task:** Find the missing numbers and fill in the pyramid completely.\n**Answer mode:** Fill the numbers in the pyramid."
    },
    "B2": {
        "type": "uniqueSolution",
        "task": "**A 4-Level Pyramid with a Unique Solution**",
        "details": "In algebra, a system of equations can have different types of solutions: One unique solution, Multiple solutions, No solution. The pyramid below has a unique solution, meaning there is only one possible way to fill in the missing values.",
        "choices": ["Yes", "No"],
        "hints": [
            "Use the pyramid rule to determine the missing numbers."
        ],
        "solutionsDetails": "**Main Task:** Find the missing numbers and complete the pyramid. Then, confirm that only one solution exists.\n**Answer mode:** Is there only one way to complete each row? Yes or No."
    },
    "B3": {
        "type": "uniqueSolution",
        "task": "**A 4-Level Pyramid with a Unique Solution (Harder Version)**",
        "details": "In algebra, a system of equations can have different types of solutions: One unique solution, Multiple solutions, No solution. The pyramid below has a unique solution, meaning there is only one possible way to fill in the missing values.",
        "choices": ["Yes", "No"],
        "hints": [
            "1. Use the pyramid rule to determine the missing numbers.",
            "2. If you cannot determine a missing number directly, assign variables to the two unknown numbers in the bottom row (e.g., a, b), and use the given numbers (75 and 280) to create equations that relate them.",
            "3. Solve step by step to see if there is only one possible solution for a and b."
        ],
        "solutionsDetails": "**Main Task:** Find the missing numbers and complete the pyramid. Then, confirm that only one solution exists.\n**Answer mode:** Is there only one way to complete each row? Yes or No."
    },
    "B4": {
        "type": "solutionTypes",
        "task": "**Identifying Different Types of Pyramid Solutions**",
        "details": "Determine which pyramid represents a unique solution, which has multiple solutions, and which has no solution.",
        "choices": ["A. Unique Solution", "B. Multiple Solutions", "C. No Solution"],
        "hints": [
            "1. For Pyramid A, try adjusting the bottom row—are there multiple sets of numbers that still satisfy the rule?",
            "2. For Pyramid B, check if you can determine a single set of values that works and why no other numbers would satisfy the pyramid rule.",
            "3. For Pyramid C, check if the given numbers create a contradiction—do any sums not add up properly?"
        ],
        "solutionsDetails": "**Main Task:** Determine which pyramid represents a unique solution, which has multiple solutions, and which has no solution.\n**Answer mode:** Please explain your reasoning."
    },
    "B5": {
        "type": "solveAndIdentify",
        "task": "**Solve the 5-Level Pyramid and Identify Its Solution Type**",
        "details": "Solve for the missing values in the 5-level pyramid and determine whether the solution is unique, has multiple solutions, or has no solution.",
        "choices": ["A. Unique Solution", "B. Multiple Solutions", "C. No Solution"],
        "solutionsDetails": "**Main task:** Solution Type\n**Answer mode:** Please explain the rationale for your choice."
    },
    "B6": {
        "type": "designAndSolve",
        "task": "**Design and Solve a Pyramid with Limited Information**",
        "details": "In this challenge, you will design a pyramid with only 5 known numbers.",
        "solutionsDetails": "**Main task:** Can you create a pyramid with 5 given numbers? Build a complete pyramid by choosing 5 numbers for the bottom row and filling in all other values using the pyramid rule to ensure that your pyramid has a solution.\n**Answer mode:** Fill the pyramid with 5 known numbers."
    },
    "C1": {
        "type": "systemOfEquations",
        "task": "**Understanding Systems of Equations**",
        "details": "Before solving the Brick Pyramid, let's review how to solve a system of equations. A system of equations is a set of two or more equations that have the same variables. The goal is to find values for the variables that make all the equations true.",
        "hints": [
            "Substitution Method: Solve for one variable first (e.g., rewrite x in terms of y), then substitute into the second equation.",
            "Elimination Method: Add or subtract the two equations to cancel out one of the variables.",
            "Checking Your Solution: After solving for x and y, substitute them back into both equations to ensure they are correct."
        ],
        "equationInputs": ["x", "y"],
        "solutionsDetails": "**Main task:** Consider the following system: x+y=10 x−y=2 Find the values of x and y.\n**Answer mode:** x=_[ ]_ y=_[ ]_"
    },
    "C2": {
        "type": "pyramidChange",
        "task": "**Updating the Pyramid After Changing a Bottom Number**",
        "details": "Start from the bottom row—change 2 to a 3, then recalculate the brick directly above it. Move upward step by step, ensuring that every brick is updated according to the sum rule.",
        "solutionsDetails": "**Answer mode:** Fill the pyramid."
    },
    "C3": {
        "type": "equationRelation",
        "task": "**How Are the Bottom Numbers Related to the Top Number?**",
        "details": "In the Brick Pyramid, each number follows this rule: Each number is the sum of the two numbers directly below it. We know that the top number is 280, but the bottom row numbers are missing.",
        "hints": [
            "Assign variables (a, b, c, d) to the unknown bottom-row numbers.",
            "Use the pyramid rule to express how these numbers add up layer by layer.",
            "Your final equation should be in the form: A⋅a+B⋅b+C⋅c+D⋅d+E⋅13=280."
        ],
        "solutionsDetails": "**Main task:** Write an equation that expresses the relationship between the bottom row numbers and the top number (280).\n**Answer mode:** __ a+___ b + __ c + __ d + __ * 13 = 280"
    },
    "C4": {
        "type": "findMistake",
        "task": "**Where Is the Mistake in This Algebraic Pyramid?**",
        "details": "The Brick Pyramid follows this rule: Each brick’s value is the sum of the two bricks directly below it. Below is a pyramid where all numbers are expressed as variables. However, the two equations do not follow the pyramid rule.",
        "hints": [
            "Use the pyramid rule: Every brick must be the sum of the two bricks directly below it.",
            "Write equations for each level to verify that the sums match.",
            "Identify where the equation does not hold.",
            "Solve for the correct value."
        ],
        "solutionsDetails": "**Main task:** Please find the incorrect equation in this pyramid, and revise it.\n**Answer mode:** Use a text box."
    },
    "C5": {
        "type": "solveForMissing",
        "task": "**Solve for the Missing Numbers in the Pyramid**",
        "details": "Below is a pyramid where some numbers are unknown. Use algebra to solve for the missing values in the bottom row.",
        "hints": [
            "Assign variables: Let the bottom row be a, b, c, d, and define each brick above as the sum of the two below it.",
            "Write equations: Express all bricks from the first to the fourth row in terms of a, b, c, and d using the pyramid rule.",
            "Use the given values: Set up equations using 31, 75, and 280 to connect the bottom row to the top.",
            "Solve step by step: Use substitution or elimination to find the values of a, b, c, and d."
        ],
        "solutionsDetails": "**Main task:** Solve for the unknown values in the bottom row using a system of equations.\n**Answer mode:** a =_[ ]_, b=_[ ]_, c=_[ ]_, d=_[ ]_"
    },
    "C6": {
        "type": "designAndSolve",
        "task": "**Design and Solve a Pyramid with Limited Information**",
        "details": "In this challenge, you will design a pyramid with only 5 known numbers.",
        "solutionsDetails": "**Main task:** Can you create a pyramid with 5 given numbers? Build a complete pyramid by choosing 5 numbers for the bottom row and filling in all other values using the pyramid rule to ensure that your pyramid has a solution.\n**Answer mode:** Fill the pyramid with 5 known numbers."
    }
};

let currentQuestion = 1; // 当前问题编号
let questionCategory = 'A'; // 设置默认分类

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    questionCategory = params.get('category') || 'A'; // 获取选择的类别
    currentQuestion = parseInt(params.get('question')) || 1; // 获取问题编号

    const questionId = `${questionCategory}${currentQuestion}`; // 按类别和编号读取题目

    loadQuestion(questionId);
};

function loadQuestion(questionId) {
    const question = questionData[questionId];

    if (!question) {
        alert("Question not found!");
        goBack();
        return;
    }

    document.getElementById('questionNumber').innerText = `Question ${questionId}`;
    document.getElementById('questionText').innerText = question.task;
    document.getElementById('taskDetails').innerText = question.details;
    
    const interactiveArea = document.getElementById('interactiveArea');
    interactiveArea.innerHTML = ''; 

    if (question.type === 'pyramid') {
        renderPyramid(question.pyramidStructure || []);
    } else if (question.type === 'choices') {
        renderChoices(question.choices);
    } else if (question.type === 'equation') {
        renderEquationInputs(question.equationInputs);
    }

    setupHints(question.hints || []);
}

function renderPyramid(pyramidStructure) {
    const pyramidContainer = document.getElementById('interactiveArea');
    pyramidContainer.innerHTML = pyramidStructure.map(row =>
        `<div class='pyramid-row'>${row.map(value => `<div class='brick'>${value === null ? '<input type="text">' : value}</div>`).join('')}</div>`
    ).join('');
}

function renderChoices(choices) {
    const choicesContainer = document.getElementById('interactiveArea');
    choicesContainer.innerHTML = choices.map(choice => `<label><input type="radio" name="choices"> ${choice}</label><br>`).join('');
}

function renderEquationInputs(inputs) {
    const equationContainer = document.getElementById('interactiveArea');
    equationContainer.innerHTML = inputs.map(input => `<label>${input} = <input type="text" name="${input}"></label><br>`).join('');
}

function setupHints(hints) {
    const hintList = document.getElementById('hintList');
    hintList.innerHTML = hints.map((hint, index) => `<li>${index + 1}. ${hint}</li>`).join('');
}

function toggleHints() {
    document.getElementById('hintList').classList.toggle('hidden');
}

function navigate(direction) {
    currentQuestion += direction;
    const questionId = `${questionCategory}${currentQuestion}`; // 根据类别和问题编号加载
    loadQuestion(questionId);
}

function submitAnswer() {
    alert('Answer submitted!');
    window.location.href = 'end.html';
}

function goBack() {
    window.history.back();
}
