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
            button.setAttribute('class', 'operator');
            buttonContainer.appendChild(button);
        }else if(i == 4){
            let button = createButton("-");
            button.setAttribute('id','subtract');
            button.setAttribute('class', 'operator');
            buttonContainer.appendChild(button);
        }else if(i == 1){
            let button = createButton("*");
            button.setAttribute('id','multiply');
            button.setAttribute('class', 'operator');
            buttonContainer.appendChild(button);
        }
    }
    const dot = createButton(".");
    const equal = createButton("=");
    const divide = createButton("/");
    dot.setAttribute('id',"dot");
    dot.setAttribute('class', 'operator');
    equal.setAttribute('id',"equal");
    equal.setAttribute('class', 'operator');
    divide.setAttribute('id', "divide");
    divide.setAttribute('class', 'operator');
    buttonContainer.appendChild(dot);
    buttonContainer.appendChild(equal);
    buttonContainer.appendChild(divide);
   
    
}




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

// button Eventlistener
const button = document.querySelectorAll('button');
let num1 = null;
let opp = null;
let num2 = null;
let num1Flag = false;
for(let i = 0; i < 16; i++){
    // last addition
    button[i].addEventListener('click', e => {
        if((e.target.textContent == '+' ||
        e.target.textContent == '-' ||
        e.target.textContent == '*' ||
        e.target.textContent == '/')&& num1 != null){
            opp = e.target.textContent;
            num1Flag = true;
            screen.textContent += opp
        }
        if(e.target.textContent == "=" && 
            num1 != null &&
            opp != null &&
            num2 != null){
                screen.textContent = operate(num1,opp,num2); 
                num1 =null;
                num2 = null;
                opp = null;
                num1Flag = false;
        }
        if(num1Flag == false ){
            num1 += e.target.textContent;

        }else if(num1Flag == true){
            num2 += e.target.textContent;
        }
    })    
}

