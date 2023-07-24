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
