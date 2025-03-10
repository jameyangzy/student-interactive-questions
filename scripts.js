let selectedOptions = [];
let answers = {};

function chooseOption(optionId) {
    document.querySelectorAll('.options').forEach(option => option.classList.add('hidden'));
    document.getElementById(optionId).classList.remove('hidden');
}

function submitAnswer(optionId) {
    let answer = '';

    if (optionId === 'A1' || optionId === 'A2') {
        answer = document.getElementById(`answer${optionId}`).value;
        if (!answer) {
            alert('Please enter your answer.');
            return;
        }
    } else if (optionId === 'B1' || optionId === 'A3') {
        const fileInput = document.getElementById(`image${optionId}`);
        if (fileInput.files.length === 0) {
            alert('Please upload a file.');
            return;
        }
        answer = fileInput.files[0].name; // simply get the file name
    } else if (optionId === 'C1' || optionId === 'B2') {
        answer = document.getElementById(`choice${optionId}`).value;
        if (!answer) {
            alert('Please select an option.');
            return;
        }
    }

    selectedOptions.push(optionId);
    answers[optionId] = answer;
    document.querySelectorAll('.question').forEach(question => question.classList.add('hidden'));

    if(optionId.startsWith('A1') || optionId.startsWith('B1') || optionId.startsWith('C1')) {
        document.getElementById('question2').classList.remove('hidden');
    } else if(optionId.startsWith('A2') || optionId.startsWith('B2')) {
        document.getElementById('question3').classList.remove('hidden');
    } else {
        saveToFile();
    }
}

function saveToFile() {
    let fileContent = `Selected Options: ${selectedOptions.join(', ')}\nAnswers:\n`;
    
    for (let option in answers) {
        fileContent += `${option}: ${answers[option]}\n`;
    }

    const blob = new Blob([fileContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'student_answers.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

