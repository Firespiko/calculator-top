function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

let firstNum,operand,lastNum;

function operate(firstNumber,operandValue,lastNumber){
    if (operandValue === "+"){
        finalValue = add(firstNumber,lastNumber);
        return finalValue;
    }

    else if (operandValue === "-"){
        finalValue = subtract(firstNumber,lastNumber);
        return finalValue;
    }

    else if (operandValue === "x"){
        finalValue = multiply(firstNumber,lastNumber);
        return finalValue;
    }

    else {
        finalValue = divide(firstNumber,lastNumber);
        return finalValue;    
    }
}

function evaluate(equation) {
    if(equation.includes("+")){
        operand = "+";
        firstNumber = parseInt(equation.split(" + ")[0]);
        secondNumber = parseInt(equation.split(" + ")[1]);
        finalValue = operate(firstNumber,operand,secondNumber);
        outputScreen.textContent = String(finalValue); 
    }

    else if(equation.includes("-")){
        operand = "-";
        firstNumber = parseInt(equation.split(" + ")[0]);
        secondNumber = parseInt(equation.split(" + ")[1]);
        finalValue = operate(firstNumber,operand,secondNumber);
        outputScreen.textContent = String(finalValue); 
    }

    else if(equation.includes("x")){
        operand = "x";
        firstNumber = parseInt(equation.split(" + ")[0]);
        secondNumber = parseInt(equation.split(" + ")[1]);
        finalValue = operate(firstNumber,operand,secondNumber);
        outputScreen.textContent = String(finalValue); 
    }

    else if (equation.includes("%")){
        operand = "%";
        firstNumber = parseInt(equation.split(" + ")[0]);
        secondNumber = parseInt(equation.split(" + ")[1]);
        finalValue = operate(firstNumber,operand,secondNumber);
        outputScreen.textContent = String(finalValue); 
    }
}

const outputScreen = document.querySelector(".output-screen")

const buttonValue1 = document.querySelector("#button-one");
const buttonValue2 = document.querySelector("#button-two");
const buttonValue3 = document.querySelector("#button-three");
const buttonValue4 = document.querySelector("#button-four");
const buttonValue5 = document.querySelector("#button-five");
const buttonValue6 = document.querySelector("#button-six");
const buttonValue7 = document.querySelector("#button-seven");
const buttonValue8 = document.querySelector("#button-eight");
const buttonValue9 = document.querySelector("#button-nine");
const buttonValue0 = document.querySelector("#button-zero");

const buttonadd = document.querySelector("#button-addition");
const buttonsubtract = document.querySelector("#button-subtract");
const buttonmultiply = document.querySelector("#button-multiply");
const buttondivide = document.querySelector("#button-divide");

const operandButtons = [buttonadd,buttonsubtract,buttonmultiply,buttondivide];

const numberButtons = [buttonValue0,buttonValue1,buttonValue2,buttonValue3,buttonValue4,buttonValue5,buttonValue6,buttonValue7,buttonValue8,buttonValue9];

clearButton = document.querySelector(".column-4 #button-clear");
equalstoButton = document.querySelector(".column-3 #button-equalsto")

equalstoButton.addEventListener('click',() => {
    equation = outputScreen.textContent;
    evaluate(equation);
})

clearButton.addEventListener('click',() => {
    outputScreen.textContent = '0';
})

for(let operandButton in operandButtons){
    operandButtons[operandButton].addEventListener('click', () => {
        outputScreen.textContent += ' ' + operandButtons[operandButton].textContent + ' ';
    })
}

for(let button in numberButtons){
    numberButtons[button].addEventListener('click',() => {
        populateOutputScreen(parseInt((numberButtons[button].textContent)));})
}

function populateOutputScreen(value) {
    if (outputScreen.textContent === '0'){
        outputScreen.textContent = '';
        outputScreen.textContent +=  String(value);    
    }
    else{
        outputScreen.textContent +=  String(value);
    }
    
}

clearButton.addEventListener('click',() => {
    outputScreen.textContent = '0';
})