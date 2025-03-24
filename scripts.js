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
    A3: {
        type: 'pyramid',
        image: 'img/A/a3.png',
        task: "Changing the Position of the Additional Given Number",
        details: "Try to solve the following pyramid by filling in the missing values while following the pyramid rule.",
        hints: ["Please explain how you found the solution."],
        mode: "pyramid"
    },
    A4: {
        type: 'verify',
        image: 'img/A/a4_1.png',
        imageB: 'img/A/a4_2.png',
        task: "The Mysterious Brick Pyramid Challenge",
        details: "Verify whether both pyramids are correct, can you fix the mistakes?",
        hints: [
            "Check each row carefully—does every brick follow the sum rule?",
            "If an error is found, modify the necessary numbers while keeping the pyramid consistent."
        ],
        choices: ["A: A is correct", "B: B is correct", "C: Both A and B", "D: Neither A nor B"],
        mode: "multipleChoice"
    },
    A5: {
        type: 'solutionType',
        image: 'img/A/a5_1.png',
        task: "Finding the Minimum Information Needed for a Unique Solution",
        details: "What's the least amount of given values required to create a unique-solution pyramid?",
        choices: ["A. 4", "B. 5", "C. 6"],
        mode: "choices"
    },
    A6: {
        type: 'design',
        image: 'img/A/a6.png',
        task: "Design and Solve a Pyramid with Limited Information",
        details: "Can you create a pyramid with 5 given numbers? Build a complete pyramid by choosing 5 numbers for the bottom row and filling in all other values using the pyramid rule to ensure that your pyramid has a solution.",
        mode: "pyramid"
    }
    // B and C questions can be added similarly
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
    } else if (question.mode === 'multipleChoice') {
        renderMultipleChoice(question.choices, question.imageB);
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

function renderMultipleChoice(choices, imageB) {
    const choicesContainer = document.getElementById('interactiveArea');
    choicesContainer.innerHTML = `<img src="${imageB}" alt="Alternative Solution Image" style="max-width: 100%; height: auto; display: block;">` + 
    choices.map(choice => `<label><input type="radio" name="choices"> ${choice}</label><br>`).join('');
    document.getElementById('answerExplanation').style.display = 'block';
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
