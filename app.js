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
//consider using a switch statement
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
function addAttributes(button,content){
    button.classList.add("cButton");
    button.textContent = content
    switch (content) {
        case "+":
            button.setAttribute('id','add');
            button.classList.add("operator");
            
            break;
        case "-":
            button.setAttribute('id','subtract');
            button.classList.add("operator");
            
            break;
        case "*":
            button.setAttribute('id','multiply');
            button.classList.add("operator");
        case "/":
            button.setAttribute('id', "divide");
            button.classList.add("operator");
            break;
        case "=":
            button.setAttribute('id',"equal");
            button.classList.add("operator");
            break;
        case ".":
            button.setAttribute('id',"dot");
            button.classList.add("operator");
            break;
        default:
            break;
    }
    return button
}

// using classlist we can add multiple classes at time 
// with the pasgitsed in content we can check for operators at this level
//simplifying code
function createButton(content){
    let button = document.createElement('button');
        //returns button obj with classes, id, and eventlisteners based on content
        //all cButton, opperator for opp id for certain opps
        //use classlist to do this
        button = addAttributes(button,content);
        return button;
}

function createButtons(){
    for (let i = 9; i >=0; i--){
        buttonContainer.appendChild(createButton(i));
        if(i == 7){
            let button = createButton("+");
            buttonContainer.appendChild(button);
        }else if(i == 4){
            let button = createButton("-");
            buttonContainer.appendChild(button);
        }else if(i == 1){
            let button = createButton("*");
            buttonContainer.appendChild(button);
        }
    }
    const dot = createButton(".");
    const equal = createButton("=");
    const divide = createButton("/");
    buttonContainer.appendChild(dot);
    buttonContainer.appendChild(equal);
    buttonContainer.appendChild(divide);
   
    
}



//put this garbage in a function to clean it up
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
            console.log(e.target.class);
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
        if(num1Flag == false && e.target.class != "operator"){
            num1 += e.target.textContent;
            console.log(e.target.class)
        }else if(num1Flag == true){
            num2 += e.target.textContent;
        }
    })    
}

