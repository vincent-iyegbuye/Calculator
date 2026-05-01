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