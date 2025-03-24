const questionData = {
    A1: {
        type: 'pyramid',
        image: 'img/A/a1.png',
        task: "Solve the 5-Level Pyramid with a Given Value",
        details: "Use the pyramid rule to determine all missing values and complete the pyramid.",
        hints: [
            "Start from the bottom row—you already know the first number (5). Use the rule to find the next brick in that row.",
            "Move upward step by step, using the sum rule to fill in the second row, then the third, and so on.",
            "Check your calculations—each brick must be the sum of the two below it."
        ],
        pyramidStructure: [
            [null],
            [null, null],
            [null, null, null],
            [null, null, null, null],
            [5, null, null, null, null]
        ],
        mode: "pyramid"
    },
    A2: {
        type: 'solutionType',
        image: 'img/A/a2.png',
        task: "Identify the Solution Type of the 5-Level Pyramid",
        details: "Determine whether the above pyramid has a unique solution, multiple solutions, or no solution.",
        hints: [
            "Try to find one solution—fill in the missing numbers step by step using the pyramid rule.",
            "Check if you can find another solution—try adjusting some of the missing numbers while still following the pyramid rule.",
            "Determine the solution type: if multiple valid solutions exist, the problem has multiple solutions; if only one solution is possible, it has a unique solution; if no numbers satisfy the pyramid rule, it has no solution."
        ],
        choices: ["A. Unique Solution", "B. Multiple Solutions", "C. No Solution"],
        mode: "choices"
    },
    // Continuing with the same format for A3 to A6...
    B1: {
        type: 'pyramid',
        image: 'img/B/b1.png',
        task: "Solve for the Missing Values in a 3-Level Pyramid",
        details: "Find the missing numbers and fill in the pyramid completely.",
        hints: [
            "Look at the numbers you have and how they relate to each other.",
            "Use the pyramid rule to determine the missing values.",
            "Work step by step, checking your calculations."
        ],
        mode: "pyramid"
    },
    B2: {
        type: 'uniqueSolution',
        image: 'img/B/b2.png',
        task: "A 4-Level Pyramid with a Unique Solution",
        details: "Find the missing numbers and complete the pyramid. Then, confirm that only one solution exists.",
        choices: ["Is there only one way to complete each row? Yes", "No"],
        hints: [
            "Use the pyramid rule to determine the missing numbers."
        ],
        mode: "choices"
    },
    // ...include other B questions similarly
    C1: {
        type: 'systemOfEquations',
        image: 'img/C/c1.png',
        task: "Understanding Systems of Equations",
        details: "Find the values of x and y in the following system: x + y = 10, x - y = 2",
        hints: [
            "Substitution Method: Solve for one variable first (e.g., rewrite x in terms of y), then substitute into the second equation.",
            "Elimination Method: Add or subtract the two equations to cancel out one of the variables."
        ],
        equationInputs: ['x', 'y'],
        mode: "equation"
    },
    C2: {
        type: 'pyramidChange',
        image: 'img/C/c2.png',
        task: "Updating the Pyramid After Changing a Bottom Number",
        details: "Start from the bottom row—change 2 to a 3, then recalculate the brick directly above it.",
        hints: [
            "Assign variables to the unknown bottom-row numbers.",
            "Your final equation should be in the form: A⋅a+B⋅b+C⋅c+D⋅d+E⋅13=280"
        ],
        mode: "pyramid"
    },
    // ...and the rest of C questions
};

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const questionId = params.get('question'); 

    loadQuestion(questionId);
}

function loadQuestion(questionId) {
    const question = questionData[questionId];
    
    if (!question) {
        goBack();
        return;
    }

    document.getElementById('questionNumber').innerText = questionId;
    document.getElementById('questionTitle').innerText = `Question: ${question.task}`;
    document.getElementById('taskDetails').innerText = question.details;
    
    if (question.image) {
        const questionImage = document.getElementById('questionImage');
        questionImage.src = question.image;
        questionImage.style.display = 'block';
    }

    if (question.mode === 'pyramid') {
        renderPyramid(question.pyramidStructure || []);
    } else if (question.mode === 'choices') {
        renderChoices(question.choices);
    } else if (question.mode === 'equation') {
        renderEquationInputs(question.equationInputs);
    }

    setupHints(question.hints);
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
    document.getElementById('answerExplanation').style.display = 'block';
}

function renderEquationInputs(inputs) {
    const equationContainer = document.getElementById('interactiveArea');
    equationContainer.innerHTML = inputs.map(input => `
        <label>${input} = <input type="text" name="${input}"></label><br>
    `).join('');
}

function setupHints(hints) {
    const hintList = document.getElementById('hintList');
    hintList.innerHTML = hints.map((hint, index) => `<li>${index + 1}. ${hint}</li>`).join('');
}

function toggleHints() {
    document.getElementById('hintList').classList.toggle('hidden');
}

function submitAnswer() {
    alert('Answer submitted!');
    window.location.href = 'end.html';
}

function goBack() {
    window.history.back();
}
