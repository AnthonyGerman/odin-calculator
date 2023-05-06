const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
const btn4 = document.querySelector('.four');
const btn5 = document.querySelector('.five');
const btn6 = document.querySelector('.six');
const btn7 = document.querySelector('.seven');
const btn8 = document.querySelector('.eight');
const btn9 = document.querySelector('.nine');
const btn0 = document.querySelector('.zero');
const btnplus = document.querySelector('.plus');
const btnminus = document.querySelector('.minus');
const btnasterisk = document.querySelector('.asterisk');
const btnslash = document.querySelector('.slash');
const btnequals = document.querySelector('.equals');
const btnclear = document.querySelector('.clear');
const display = document.querySelector("div");

function add (x, y) {
    return parseInt(x) + parseInt(y);
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayValue = "";

btn0.addEventListener("click", () => {
    displayValue += "0";
    display.textContent = displayValue;
});

btn1.addEventListener("click", () => {
    displayValue += "1";
    display.textContent = displayValue;
});

btn2.addEventListener("click", () => {
    displayValue += "2";
    display.textContent = displayValue;
});

btn3.addEventListener("click", () => {
    displayValue += "3";
    display.textContent = displayValue;
});

btn4.addEventListener("click", () => {
    displayValue += "4";
    display.textContent = displayValue;
});

btn5.addEventListener("click", () => {
    displayValue += "5";
    display.textContent = displayValue;
});

btn6.addEventListener("click", () => {
    displayValue += "6";
    display.textContent = displayValue;
});

btn7.addEventListener("click", () => {
    displayValue += "7";
    display.textContent = displayValue;
});

btn8.addEventListener("click", () => {
    displayValue += "8";
    display.textContent = displayValue;
});

btn9.addEventListener("click", () => {
    displayValue += "9";
    display.textContent = displayValue;
});

btnplus.addEventListener("click", () => {
    displayValue += " + ";
    display.textContent = displayValue;
});

btnminus.addEventListener("click", () => {
    displayValue += " - ";
    display.textContent = displayValue;
});

btnasterisk.addEventListener("click", () => {
    displayValue += " * ";
    display.textContent = displayValue;
});

btnslash.addEventListener("click", () => {
    displayValue += " / ";
    display.textContent = displayValue;
});

btnclear.addEventListener("click", () => {
    displayValue = "";
    display.textContent = displayValue;
});

btnequals.addEventListener("click", () => {
    let array = displayValue.split(" ");
    displayValue = operate(array[0], array[1], array[2]);
    display.textContent = displayValue;
});

function operate (x, operator, y) {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
}

