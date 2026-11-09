let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

switch (operator) {
    case "+":
        alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
        break;
    case "-":
        alert(firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
        break;
    case "*":
        alert(firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber));
        break;
    case "/":
        if (secondNumber !== 0) {
            alert(firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
        } else {
            alert("Error: Division by zero is not allowed.");
        }
        break;
    default:
        alert("Error: Invalid operator. Please enter +, -, *, or /.");
}