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
const operationButtons = document.querySelectorAll('[data-op]');

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

function appendNumber(num){
    if (num === '.' && currentOperand.includes('.')) return;

    currentOperand = currentOperand.toString() + num.toString();

}

numberButtons.forEach((button) => {
    button.addEventListener("click", ()=>{
        console.log(button.textContent)
        appendNumber(button.getAttribute('data-num'));
        updateDisplay();
    })
})
updateDisplay();

