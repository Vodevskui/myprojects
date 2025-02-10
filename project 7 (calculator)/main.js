let display = document.getElementById("display");
let displayValue = "0";

function appendToDisplay(value) {
    if (displayValue === "0" || displayValue === "Ошибка") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    display.textContent = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        display.textContent = displayValue;
    } catch (error) {
        display.textContent = "Ошибка";
        displayValue = "0";
    }
}