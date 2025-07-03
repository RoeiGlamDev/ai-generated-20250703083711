// Get the display element
const display = document.getElementById('display');

// Get the buttons
const buttons = document.querySelectorAll('button');

// Initialize the calculator state
let currentNumber = '';
let previousNumber = '';
let operator = null;

// Function to update the display
function updateDisplay() {
  display.value = currentNumber;
}

// Function to handle number button clicks
function handleNumberClick(event) {
  const number = event.target.dataset.value;
  currentNumber += number;
  updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
  const op = event.target.dataset.value;
  previousNumber = currentNumber;
  currentNumber = '';
  operator = op;
}

// Function to handle equals button click
function handleEqualsClick() {
  if (previousNumber && currentNumber && operator) {
    const result = calculate(previousNumber, currentNumber, operator);
    currentNumber = result.toString();
    previousNumber = '';
    operator = null;
    updateDisplay();
  }
}

// Function to handle clear button click
function handleClearClick() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  updateDisplay();
}

// Function to calculate the result
function calculate(num1, num2, op) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error('Cannot divide by zero');
      }
    default:
      throw new Error('Invalid operator');
  }
}

// Add event listeners to the buttons
buttons.forEach((button) => {
  if (button.classList.contains('number')) {
    button.addEventListener('click', handleNumberClick);
  } else if (button.classList.contains('operator')) {
    button.addEventListener('click', handleOperatorClick);
  } else if (button.classList.contains('clear')) {
    button.addEventListener('click', handleClearClick);
  } else if (button.dataset.value === '=') {
    button.addEventListener('click', handleEqualsClick);
  }
});

// Add fade-in animation to the calculator
document.querySelector('.calculator').classList.add('fade-in');