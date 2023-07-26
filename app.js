function add (num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1/num2;
}
function operate(num1,opp,num2){
    if(opp === "+"){
        return add(num1,num2);
    }else if(opp === "-"){
        return subtract(num1,num2);
    }else if (opp === "*"){
        return multiply(num1,num2);
    }else if (opp === "/"){
        return divide(num1,num2);
    }else{
        console.log("Invalid Input");
    }
} 
function createButton(content){
    let button = document.createElement('button');
        button.setAttribute('class',"cButton");
        button.textContent = content;
        return button;
}

function createButtons(){
    for (let i = 9; i >=0; i--){
        buttonContainer.appendChild(createButton(i));
        if(i == 7){
            let button = createButton("+");
            button.setAttribute('id','add');
            buttonContainer.appendChild(button);
        }else if(i == 4){
            let button = createButton("-");
            button.setAttribute('id','subtract');
            buttonContainer.appendChild(button);
        }else if(i == 1){
            let button = createButton("*");
            button.setAttribute('id','multiply');
            buttonContainer.appendChild(button);
        }
    }
    const dot = createButton(".");
    const equal = createButton("=");
    const divide = createButton("/");
    dot.setAttribute('id',"dot");
    equal.setAttribute('id',"equal");
    divide.setAttribute('id', "divide");
    buttonContainer.appendChild(dot);
    buttonContainer.appendChild(equal);
    buttonContainer.appendChild(divide);
   
    
}

let num1 = 5;
let opp1 = "+";
let opp2 = "-";
let opp3 = "*";
let opp4 = "/";
let num2 = 2;

console.log(operate(num1,opp1,num2));
console.log(operate(num1,opp2,num2));
console.log(operate(num1,opp3,num2));
console.log(operate(num1,opp4,num2));

const container = document.querySelector("#container");
// add screen to calculator
const screen = document.createElement("div");
screen.setAttribute('id',"screen");
container.appendChild(screen);
// add buttonContainer to Calculator
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('id','buttonContainer');
createButtons();
container.appendChild(buttonContainer);
