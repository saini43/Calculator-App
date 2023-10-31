let display = document.getElementById("display");
let currentInput = "";
let result = 0;

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculate() {
    try {
        result = eval(currentInput);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
    currentInput = "";
}
