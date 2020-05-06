function Calculator(previousOperandText, currentOperandText){
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;

    this.clear = function(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }
    this.delete = function(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    this.appendNumber = function(number){   
        this.currentOperand = this.currentOperand.toString() + number;
    }
    this.chooseOperation = function(operation){
        if(this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }
    
    this.compute = function(){
        let compulation;
        let prev = parseInt(this.previousOperand);
        let current = parseInt(this.currentOperand);

        if(isNaN(prev) || isNaN(current)) return;

        if(this.operation === "+") compulation = prev + current;
        else if(this.operation === "-") compulation = prev - current;
        else if(this.operation === "*") compulation = prev * current;
        else if(this.operation === "/") compulation = prev / current;
        else return;

        this.currentOperand = compulation;
        this.operation = undefined;
        this.previousOperand = "";

    }
    this.updateDisplay = function(){
        this.currentOperandText.innerText = this.currentOperand;
        this.previousOperandText.innerText = this.previousOperand;
    }

}

///////////////////////////////////////////////////
let parentDiv = document.querySelector("div");
let buttons;

for (let i = 0; i < 18; i++) {
    buttons = document.createElement("button");
    parentDiv.appendChild(buttons);
}

for (let i = 0; i<parentDiv.children.length + 1; i++) {
    if(i == 5 || i == 9 || i == 13 || i == 17){
        parentDiv.childNodes[i].classList.add("operation");
    }
    else if(i==6||i ==7||i==8||i==10||i==11||i==12||i==14||i==15||i==16||i==19) {
        parentDiv.childNodes[i].classList.add("numClass");
    }   
    else if (i == 4) parentDiv.childNodes[i].classList.add("delete");
}

////////////////////////////////////////////////////////
parentDiv.childNodes[3].innerHTML = "AC";
parentDiv.childNodes[3].classList.add("allClear");

parentDiv.childNodes[4].innerHTML = "DEL";
parentDiv.childNodes[5].innerHTML = "+";
parentDiv.childNodes[6].innerHTML = "1";
parentDiv.childNodes[7].innerHTML = "2";
parentDiv.childNodes[8].innerHTML = "3";
parentDiv.childNodes[9].innerHTML = "*";
parentDiv.childNodes[10].innerHTML = "4";
parentDiv.childNodes[11].innerHTML = "5";
parentDiv.childNodes[12].innerHTML = "6";
parentDiv.childNodes[13].innerHTML = "/";
parentDiv.childNodes[14].innerHTML = "7";
parentDiv.childNodes[15].innerHTML = "8";
parentDiv.childNodes[16].innerHTML = "9";
parentDiv.childNodes[17].innerHTML = "-";
parentDiv.childNodes[18].innerHTML = "";
parentDiv.childNodes[19].innerHTML = "0";

parentDiv.childNodes[20].innerHTML = "=";
parentDiv.childNodes[20].classList.add("equals");
////////////////////////////////////////////////////////


let numberButtons = document.querySelectorAll(".numClass");
let operationButtons = document.querySelectorAll(".operation");

let equalsButton = document.querySelector(".equals");
let deleteButton = document.querySelector(".delete");
let allClearButton = document.querySelector(".allClear");

let previousOperandText = document.querySelector(".previous");
let currentOperandText = document.querySelector(".current");



let calculator = new Calculator(previousOperandText, currentOperandText);
calculator.clear();

allClearButton.addEventListener("click",()=>{
    calculator.clear();
    calculator.updateDisplay();
});

numberButtons.forEach((button=>{
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerText.toString());  
        calculator.updateDisplay();
    });
}));


operationButtons.forEach((button=>{
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerText.toString()); 
        calculator.chooseOperation(button.innerText.toString());  
        calculator.updateDisplay();
    });
}));

equalsButton.addEventListener("click", ()=> {
    calculator.compute();
    calculator.updateDisplay();
});
deleteButton.addEventListener("click", ()=>{
    calculator.delete();
    calculator.updateDisplay();
});



