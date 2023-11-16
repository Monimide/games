let displayValue = '';
let currentOperator = '';
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperator === '') {
        firstOperand = displayValue;
        displayValue = '';
        currentOperator = operator;
    }
    updateDisplay();
}

function calculate() {
    if (currentOperator === '') {
        return;
    }
    if (displayValue === '') {
        return;
    }

    switch (currentOperator) {
        case '+':
            displayValue = String(parseFloat(firstOperand) + parseFloat(displayValue));
            break;
        case '-':
            displayValue = String(parseFloat(firstOperand) - parseFloat(displayValue));
            break;
        case '*':
            displayValue = String(parseFloat(firstOperand) * parseFloat(displayValue));
            break;
        case '/':
            if (parseFloat(displayValue) === 0) {
                displayValue = 'Error';
            } else {
                displayValue = String(parseFloat(firstOperand) / parseFloat(displayValue));
            }
            break;
    }

    firstOperand = null;
    currentOperator = '';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    currentOperator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
