<<<<<<< HEAD
// Arithmetic Functions
=======
// Step 1: Arithmetic Functions
>>>>>>> a357d45 (my commit)
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
<<<<<<< HEAD
    if (number2 === 0) {
        return "Cannot divide by zero!";
=======
    // Handle division by zero
    if (number2 === 0) {
        alert("Cannot divide by zero!");
        return 0;
>>>>>>> a357d45 (my commit)
    }
    return number1 / number2;
}

<<<<<<< HEAD
// Helper function to get numbers safely
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Update result display
function displayResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event Listeners

// Addition
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = add(number1, number2);
    displayResult(result);
});

// Subtraction
document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2);
    displayResult(result);
});

// Multiplication
document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = multiply(number1, number2);
    displayResult(result);
});

// Division
document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    const result = divide(number1, number2);
    displayResult(result);
=======
// Step 2: Select input fields and result span
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultSpan = document.getElementById('calculation-result');

// Step 3: Event listeners for buttons

// Addition
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = add(number1, number2);
    resultSpan.textContent = result;
});

// Subtraction
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = subtract(number1, number2);
    resultSpan.textContent = result;
});

// Multiplication
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = multiply(number1, number2);
    resultSpan.textContent = result;
});

// Division
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = divide(number1, number2);
    resultSpan.textContent = result;
>>>>>>> a357d45 (my commit)
});
