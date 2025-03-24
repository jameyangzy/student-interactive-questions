const questionData = {
    A: [
        {
            number: "A1",
            text: "Question 1: Solve the 5-Level Pyramid with a Given Value",
            task: `Welcome to the Brick Pyramid Challenge! You will apply logical reasoning and step-by-step calculations to fill in missing values in a 5-level pyramid.`,
            mainTask: "Determine all missing values and complete the pyramid.",
            pyramidStructure: [
                [280],
                [null, 75],
                [null, null, 31],
                [null, 5, null, 13],
                [null, null, null, null, null]
            ],
            hints: [
                "Start from the bottom row—you already know the first number (5).",
                "Move upward step by step, using the sum rule.",
                "Check your calculations—each brick must be the sum of the two below it."
            ]
        },
        // 根据具体题目继续设置A2到A6
    ],
    B: [
        // 根据具体题目设置B1到B6
    ],
    C: [
        // 根据具体题目设置C1到C6
    ]
};

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

// 其他代码保持不变...
