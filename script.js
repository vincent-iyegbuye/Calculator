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