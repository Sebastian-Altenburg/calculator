// eslint-disable-next-line no-unused-vars
import buttonCreation from "../modules/button";
// eslint-disable-next-line no-unused-vars
import dom from "../modules/dom";
import "./style.css";

// This IIFE contains all major functions for the calculator to work
const calc = (() => {
    let currentOperand = "";
    let previousOperand = "";
    let operation;

    const updateDisplay = () => {
        const previousOperandText = document.querySelector(".previous");
        const currentOperandText = document.querySelector(".current");

        previousOperandText.innerText = previousOperand;
        currentOperandText.innerText = currentOperand;
    };

    const clear = () => {
        currentOperand = "";
        previousOperand = "";

        updateDisplay();
    };

    const deleteLast = () => {
        currentOperand = currentOperand.toString().slice(0, -1);

        updateDisplay();
    };

    const appendNumber = (number) => {
        currentOperand = currentOperand.toString() + number;

        updateDisplay();
    };

    const compute = () => {
        let compulation;
        const prev = parseInt(previousOperand, 10);
        const current = parseInt(currentOperand, 10);

        if (Number.isNaN(prev) || Number.isNaN(current)) return;

        if (operation === "+") compulation = prev + current;
        else if (operation === "-") compulation = prev - current;
        else if (operation === "*") compulation = prev * current;
        else if (operation === "/") compulation = prev / current;
        else return;

        currentOperand = Math.round(compulation);
        previousOperand = "";

        updateDisplay();
    };

    const chooseOperation = (passedOp) => {
        if (currentOperand === "") return;
        if (previousOperand !== "") {
            compute();
        }

        operation = passedOp;
        previousOperand = currentOperand;
        currentOperand = "";

        updateDisplay();
    };

    return { clear, deleteLast, appendNumber, chooseOperation, compute };
})();

/// Eventlisteners for Button below

document.querySelector(".allClear").addEventListener("click", () => {
    calc.clear();
});

document.querySelectorAll(".numClass").forEach((button) => {
    button.addEventListener("click", () => {
        calc.appendNumber(button.innerText.toString());
    });
});

document.querySelectorAll(".operation").forEach((button) => {
    button.addEventListener("click", () => {
        calc.appendNumber(button.innerText.toString());
        calc.chooseOperation(button.innerText.toString());
    });
});

document.querySelector(".equals").addEventListener("click", () => {
    calc.compute();
});

document.querySelector(".delete").addEventListener("click", () => {
    calc.deleteLast();
});
