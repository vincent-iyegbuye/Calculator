const themeToggle = document.getElementById('theme-toggle');
const calculator = document.getElementById('main-calculator');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        // Switch to Dark Mode
        calculator.classList.remove('calc-light');
        calculator.classList.add('calc-dark');
    } else {
        // Switch to Light Mode
        calculator.classList.remove('calc-dark');
        calculator.classList.add('calc-light');
    }
});


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "UNDEFINED"
    }
    return a / b;
}

function operate(operator, a, b) {

    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);

        case '-':
            return subtract(a, b);

        case '*':
            return multiply(a, b)

        case '÷':
            return divide(a, b);

        default:
            return null;
    }
}

let previousOperand = '';
let currentOperand = '';
let operation = undefined;

const numberButtons = document.querySelectorAll('[data-num]');
const operationButtons = document.querySelectorAll('#op');
const equalTo = document.querySelector("#eq")

const historyDisplay = document.querySelector('#history-display');
const resultDisplay = document.querySelector("#result-display")

function updateDisplay() {
    // Show the current number, or default to '0' if it's empty
    resultDisplay.innerText = currentOperand || '0'; 
    
    // If an operation is chosen, show the history at the top
    if (operation != null) {
        historyDisplay.innerText = `${previousOperand} ${operation}`;
    } else {
        historyDisplay.innerText = '';
    }
}
let shouldResetScreen = false;

function appendNumber(num){
    if (shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false; // Reset the flag so they can type multi-digit numbers again
    }
    if (num === '.' && currentOperand.includes('.')) return;

    currentOperand = currentOperand.toString() + num.toString();

}

numberButtons.forEach((button) => {
    button.addEventListener("click", ()=>{
        
        appendNumber(button.getAttribute('data-num'));
        updateDisplay();
    })
})

operationButtons.forEach((button) => {
    button.addEventListener("click", ()=>{
        chooseOperation(button.innerText);
        updateDisplay();

    })
})

function chooseOperation(op) {
    if (currentOperand === ''){
        if(previousOperand !== ''){
            operation = op;
        }
        return;

    } 
    
    // If we already have a previous number, do the math before starting a new operation (chaining)
    if (previousOperand !== '') {
        compute();
    }
    
    // Set the operation, move the current number to previous, and clear current for the next number
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    // Stop if there aren't two valid numbers to calculate
    if (isNaN(prev) || isNaN(current)) return;

    // Call the operate function we built earlier
    result = operate(operation, prev, current);

    // Update the state with the new result
    currentOperand = result.toString();
    operation = undefined;
    previousOperand = '';
}

equalTo.addEventListener("click",()=>{
    const prev = previousOperand;
    const current = currentOperand;
    const op = operation;
    compute();
    updateDisplay();
    if (op != null) {
        historyDisplay.innerText = `${prev} ${op} ${current} =`;
    }
    shouldResetScreen = true;
})
updateDisplay();

