import {buttonCreation} from "/modules/button.js";
import {dom} from "/modules/dom.js";


const calc = (() => {
    let currentOperand = "";
    let previousOperand = "";
    let operation;

    const clear = ()=> {
        currentOperand = "";
        previousOperand = "";

        updateDisplay();
    }

    const deleteLast = () =>{
        currentOperand = currentOperand.toString().slice(0, -1);

        updateDisplay();
    }
    
    const updateDisplay = () => {
    
        let previousOperandText = document.querySelector(".previous");
        let currentOperandText = document.querySelector(".current");
        
        previousOperandText.innerText = previousOperand;
        currentOperandText.innerText = currentOperand;
    }
    
    const appendNumber  = (number) => {
         currentOperand = currentOperand.toString() + number;

         updateDisplay();
    }
    
    const chooseOperation = (passedOp) => {
    
        if(currentOperand === "") return;
        if (previousOperand !== "") {
            compute();
        }
    
        operation = passedOp;
        previousOperand = currentOperand;
        currentOperand = "";

        updateDisplay();
    }
    
    const compute = () => {
    
        let compulation;
        let prev = parseInt(previousOperand);
        let current = parseInt(currentOperand);
    
        if(isNaN(prev) || isNaN(current)) return;
    
        if(operation === "+") compulation = prev + current;
        else if(operation === "-") compulation = prev - current;
        else if(operation === "*") compulation = prev * current;
        else if(operation === "/") compulation = prev / current;
        else return;
    
        currentOperand = Math.round(compulation);
        previousOperand = "";

        updateDisplay();
    }

    return {clear, deleteLast, appendNumber, chooseOperation, compute};
})();


//////////////////////////////////////////////////////////////////////////////

const allClearBtn = document.querySelector(".allClear").addEventListener("click", ()=> {
    calc.clear();
});

const numberBtn = document.querySelectorAll(".numClass").forEach((button) =>{
    button.addEventListener("click", ()=> {
        calc.appendNumber(button.innerText.toString());
    })
})

const operationBtn = document.querySelectorAll(".operation").forEach((button) => {
    button.addEventListener("click", ()=> {
        calc.appendNumber(button.innerText.toString()); 
        calc.chooseOperation(button.innerText.toString()); 
    });
})

const equalsBtn = document.querySelector(".equals").addEventListener("click", ()=> {
    calc.compute();
});

const deleteBtn = document.querySelector(".delete").addEventListener("click", ()=>{
    calc.deleteLast();
});





