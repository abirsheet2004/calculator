let display = document.getElementById('display');
let currentInput = '';
let operator = '';

function appendDigit(digit) {
    if (currentInput.length < 15) {
        currentInput += digit;
        updateDisplay();
    }
}

function appendOperator(op) {
    if (currentInput !== '') {
        if (operator) {
            calculate();
        }
        operator = op;
        currentInput += ' ' + op + ' ';
        updateDisplay();
    }
}

function appendDot() {
    if (currentInput.indexOf('.') === -1) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}

