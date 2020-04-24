/////////Global Variables

let firstValue = "";
let secValue = "";
let solution;

/////////////////////////

function add(num1, num2){
    solution = parseInt(num1) + parseInt(num2);
    strSolution = solution.toString();
    document.getElementsByClassName("display")[0].value = strSolution;  
}
function subtract(num1, num2){
    solution = parseInt(num1) - parseInt(num2);
    strSolution = solution.toString();
    document.getElementsByClassName("display")[0].value = strSolution;
}
function multiply(num1,num2){
    solution = parseInt(num1) * parseInt(num2);
    strSolution = solution.toString();
    document.getElementsByClassName("display")[0].value = strSolution;
}
function divide(num1,num2){
    solution = parseInt(num1) / parseInt(num2);
    strSolution = solution.toString();
    document.getElementsByClassName("display")[0].value = strSolution;
}

function operate(mathOperator, num1, num2){
    
    if (mathOperator == "plus") {
        add(num1, num2);
    }
    else if (mathOperator == "minus") {
        subtract(num1, num2);
    }
    else if (mathOperator == "multi") {
        multiply(num1, num2);
    }
    else if (mathOperator == "dividing") {
        divide(num1, num2);
    }
}



let parentDiv = document.querySelector("div");
parentDiv.childNodes[0].classList.add("display");

for (let i = 0; i < 17; i++) {
    let childDiv = document.createElement("button");
    // childDiv.innerHTML = "BUTTON";
    parentDiv.appendChild(childDiv);
}




firstNumber();
function firstNumber(){
    
    

    parentDiv.childNodes[1].innerHTML = "+";
    parentDiv.childNodes[1].addEventListener("click",()=>{

        document.querySelector(".display").value += "+";
        secondNum("plus", firstValue);
    });
    
    parentDiv.childNodes[2].innerHTML = "7";
    parentDiv.childNodes[2].addEventListener("click", ()=> {
        firstValue += 7;
        document.querySelector(".display").value = firstValue;
        
    });
    
    parentDiv.childNodes[3].innerHTML = "8";
    parentDiv.childNodes[3].addEventListener("click", ()=> {
        firstValue += 8;
        document.querySelector(".display").value = firstValue;
    });
    parentDiv.childNodes[4].innerHTML = "9";
    parentDiv.childNodes[4].addEventListener("click", ()=> {
        firstValue += 9;
        document.querySelector(".display").value = firstValue;
    });
    parentDiv.childNodes[5].innerHTML = "-";
    parentDiv.childNodes[5].addEventListener("click",()=>{
        document.querySelector(".display").value += "-";
        secondNum("minus", firstValue);
    });
    
    parentDiv.childNodes[6].innerHTML = "4";
    parentDiv.childNodes[6].addEventListener("click", ()=> {
        firstValue += 4;
        document.querySelector(".display").value = firstValue;
    });
    parentDiv.childNodes[7].innerHTML = "5";
    parentDiv.childNodes[7].addEventListener("click", ()=> {
        firstValue += 5;
        document.querySelector(".display").value = firstValue;
    });
    parentDiv.childNodes[8].innerHTML = "6";
    parentDiv.childNodes[8].addEventListener("click", ()=> {
        firstValue += 6;
        document.querySelector(".display").value = firstValue;
    });
    parentDiv.childNodes[9].innerHTML = "*";
    parentDiv.childNodes[9].addEventListener("click",()=>{
        document.querySelector(".display").value += "*";
        secondNum("multi", firstValue);
    });
    
    parentDiv.childNodes[10].innerHTML = "1";
    parentDiv.childNodes[10].addEventListener("click", ()=> {
        firstValue += 1;
        document.querySelector(".display").value = firstValue;
    });
    parentDiv.childNodes[11].innerHTML = "2";
    parentDiv.childNodes[11].addEventListener("click", ()=> {
        firstValue += 2;
        document.querySelector(".display").value = firstValue;
    });
    parentDiv.childNodes[12].innerHTML = "3";
    parentDiv.childNodes[12].addEventListener("click", ()=> {
        firstValue += 3;
        document.querySelector(".display").value = firstValue;
    });
    parentDiv.childNodes[13].innerHTML = "/";
    parentDiv.childNodes[13].addEventListener("click",()=>{
        document.querySelector(".display").value += "/";
        secondNum("dividing", firstValue);
    });
    
    parentDiv.childNodes[14].innerHTML = "0";
    parentDiv.childNodes[14].addEventListener("click", ()=> {
        firstValue += 0;
        document.querySelector(".display").value = firstValue;
    });
    parentDiv.childNodes[15].innerHTML = " ";
    parentDiv.childNodes[16].innerHTML = "CLEAR";
    parentDiv.childNodes[16].addEventListener("click", ()=>{
        location.reload();
    });
    parentDiv.childNodes[17].innerHTML = "=";
    parentDiv.childNodes[17].addEventListener("click",()=>{
        document.querySelector(".display").value = firstValue;
    });

}


//////////////////////////////////////////
function secondNum(operator, firstValue){
    
    // parentDiv.childNodes[0].classList.add("display");

    // parentDiv.childNodes[1].innerHTML = "+";
    // parentDiv.childNodes[1].addEventListener("click",()=>{});
    
    parentDiv.childNodes[2].innerHTML = "7";
    parentDiv.childNodes[2].addEventListener("click", ()=> {
        secValue += 7;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
        
    });
    
    parentDiv.childNodes[3].innerHTML = "8";
    parentDiv.childNodes[3].addEventListener("click", ()=> {
        secValue += 8;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
    });
    parentDiv.childNodes[4].innerHTML = "9";
    parentDiv.childNodes[4].addEventListener("click", ()=> {
        secValue += 9;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
    });
    // parentDiv.childNodes[5].innerHTML = "-";
    // parentDiv.childNodes[5].addEventListener("click",()=>{});
    
    parentDiv.childNodes[6].innerHTML = "4";
    parentDiv.childNodes[6].addEventListener("click", ()=> {
        secValue += 4;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
    });
    parentDiv.childNodes[7].innerHTML = "5";
    parentDiv.childNodes[7].addEventListener("click", ()=> {
        secValue += 5;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
    });
    parentDiv.childNodes[8].innerHTML = "6";
    parentDiv.childNodes[8].addEventListener("click", ()=> {
        secValue += 6;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
    });
    // parentDiv.childNodes[9].innerHTML = "*";
    // parentDiv.childNodes[9].addEventListener("click",()=>{});
    
    parentDiv.childNodes[10].innerHTML = "1";
    parentDiv.childNodes[10].addEventListener("click", ()=> {
        secValue += 1;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
    });
    parentDiv.childNodes[11].innerHTML = "2";
    parentDiv.childNodes[11].addEventListener("click", ()=> {
        secValue += 2;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
    });
    parentDiv.childNodes[12].innerHTML = "3";
    parentDiv.childNodes[12].addEventListener("click", ()=> {
        secValue += 3;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
    });
    // parentDiv.childNodes[13].innerHTML = "/";
    // parentDiv.childNodes[13].addEventListener("click",()=>{});
    
    parentDiv.childNodes[14].innerHTML = "0";
    parentDiv.childNodes[14].addEventListener("click", ()=> {
        secValue += 0;
        if(operator == "plus"){
            document.querySelector(".display").value = firstValue + "+" + secValue;
        }
        else if (operator == "minus") {
            document.querySelector(".display").value = firstValue + "-" + secValue;
        }
        else if (operator == "multi") {
            document.querySelector(".display").value = firstValue + "*" + secValue;
        }
        else if (operator == "dividing") {
            document.querySelector(".display").value = firstValue + "/" + secValue;
        }
    });
    
    parentDiv.childNodes[16].innerHTML = "CLEAR";
    parentDiv.childNodes[16].addEventListener("click", ()=>{
        location.reload();
    });
    parentDiv.childNodes[17].innerHTML = "=";
    parentDiv.childNodes[17].addEventListener("click",()=>{
        operate(operator, firstValue, secValue);
    });


    parentDiv.childNodes[15].innerHTML = " ";

}





