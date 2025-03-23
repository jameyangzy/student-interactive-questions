let questions = [
    { 
        title: "A1", 
        text: "Welcome to the Brick Pyramid Challenge! You will apply logical reasoning to fill in missing values in a 5-level pyramid. <br><br> Each brick follows a simple rule: <strong>Every brick is the sum of the two bricks directly below it.</strong>",
        image: "images/a1.png", 
        hint: "Start from the bottom row—you already know the first number (5). Move upward step by step.",
    },
    { 
        title: "A2", 
        text: "Solve this number sequence problem. Identify the pattern and fill in the missing numbers.",
        image: "images/a2.png", 
        hint: "Look for arithmetic patterns between numbers.",
    },
    { 
        title: "A3", 
        text: "A mathematical puzzle awaits! Can you figure out the missing elements?",
        image: "images/a3.png", 
        hint: "Each row contributes to the row above it.",
    },
    { 
        title: "A4", 
        text: "Find the missing numbers using logical deductions and arithmetic operations.",
        image: "images/a4.png", 
        hint: "Think step by step—each level builds upon the previous one.",
    },
    { 
        title: "A5", 
        text: "Use the given numbers to complete the pattern in this challenge.",
        image: "images/a5.png", 
        hint: "The numbers follow a consistent rule—find it!",
    },
    { 
        title: "A6", 
        text: "Solve this structured problem by filling in the blanks correctly.",
        image: "images/a6.png", 
        hint: "Examine the relationships between known and unknown numbers.",
    },
    { 
        title: "B1", 
        text: "Use logical analysis to determine the missing numbers in this diagram.",
        image: "images/b1.png", 
        hint: "Numbers depend on their neighbors—analyze carefully.",
    },
    { 
        title: "B2", 
        text: "Find the missing values based on the given mathematical principles.",
        image: "images/b2.png", 
        hint: "Follow the logical steps carefully.",
    },
    { 
        title: "B3", 
        text: "Fill in the missing elements by recognizing the number pattern.",
        image: "images/b3.png", 
        hint: "Look for patterns across different rows.",
    },
    { 
        title: "B4", 
        text: "A logic puzzle—identify the rule and complete the missing numbers.",
        image: "images/b4.png", 
        hint: "Each number contributes to the overall pattern.",
    },
    { 
        title: "B5", 
        text: "Follow the clues and solve this numerical challenge.",
        image: "images/b5.png", 
        hint: "Analyze from bottom to top.",
    },
    { 
        title: "B6", 
        text: "Use arithmetic logic to complete the missing spaces.",
        image: "images/b6.png", 
        hint: "Each number has a defined relationship with its neighbors.",
    },
    { 
        title: "C1", 
        text: "Break the problem into smaller parts to find the missing values.",
        image: "images/c1.png", 
        hint: "Use logical steps to work upwards.",
    },
    { 
        title: "C2", 
        text: "Identify the missing numbers using systematic reasoning.",
        image: "images/c2.png", 
        hint: "Think step by step, considering all relationships.",
    },
    { 
        title: "C3", 
        text: "Find the correct values using mathematical reasoning.",
        image: "images/c3.png", 
        hint: "Each level follows a structured approach.",
    },
    { 
        title: "C4", 
        text: "Analyze the pattern and fill in the missing numbers correctly.",
        image: "images/c4.png", 
        hint: "Think of how the numbers relate to each other.",
    },
    { 
        title: "C5", 
        text: "Solve this structured problem using systematic analysis.",
        image: "images/c5.png", 
        hint: "Use known values to determine unknown ones.",
    },
    { 
        title: "C6", 
        text: "Complete the sequence using logical deductions.",
        image: "images/c6.png", 
        hint: "Follow the number relationships carefully.",
    }
];

let currentIndex = 0;

function loadQuestion(index) {
    if (index >= questions.length) {
        alert("You have completed all questions!");
        return;
    }

    let question = questions[index];
    document.getElementById("question-title").innerText = question.title;
    document.getElementById("question-text").innerHTML = question.text;
    document.getElementById("question-image").src = question.image;
    document.getElementById("hint-text").innerHTML = "<strong>Hint:</strong> " + question.hint;
    document.getElementById("hint-text").style.display = "none"; 
    document.getElementById("answer-input").value = "";
}

function showHint() {
    document.getElementById("hint-text").style.display = "block";
}

function nextQuestion() {
    currentIndex++;
    loadQuestion(currentIndex);
}

// 初始加载
window.onload = function () {
    loadQuestion(currentIndex);
};
