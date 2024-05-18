function calculateNumberType(number) {
    if(number.includes(".")){
        return parseFloat(number);
    }
    else {
        return parseInt(number);
    }
}

function numberTypeChecker(number){
    if((parseInt(number) % 1 == 0)){
        return true;
    }
    else {
        return false;
    }
}


function add(num1,num2) {
    if(numberTypeChecker(num1) === true){
        num1 = parseFloat(num1.toFixed(2));
    }
    if(numberTypeChecker(num2) === true){
        num2 = parseFloat(num2.toFixed(2));
    }

    finalValue = num1 + num2;
    if(numberTypeChecker(finalValue) === true){
        finalValue = parseFloat(finalValue.toFixed(2));
    }
    return finalValue;
}

function subtract(num1,num2) {
    if(numberTypeChecker(num1) === true){
        num1 = parseFloat(num1.toFixed(2));
    }
    if(numberTypeChecker(num2) === true){
        num2 = parseFloat(num2.toFixed(2));
    }

    finalValue = num1 - num2;
    if(numberTypeChecker(finalValue) === true){
        finalValue = parseFloat(finalValue.toFixed(2));
    }
    return finalValue;
}

function multiply(num1,num2) {
    if(numberTypeChecker(num1) === true){
        num1 = parseFloat(num1.toFixed(2));
    }
    if(numberTypeChecker(num2) === true){
        num2 = parseFloat(num2.toFixed(2));
    }

    finalValue = num1 * num2;
    if(numberTypeChecker(finalValue) === true){
        finalValue = parseFloat(finalValue.toFixed(2));
    }
    return finalValue;
}

function divide(num1,num2) {
    if (num2 === 0){
        alert("Number cannot be in denominator");
        outputScreen.textContent = '';
    }
    else {
        if(numberTypeChecker(num1) === true){
            num1 = parseFloat(num1.toFixed(2));
        }
        if(numberTypeChecker(num2) === true){
            num2 = parseFloat(num2.toFixed(2));
        }
    
        finalValue = num1 / num2; 
        if(numberTypeChecker(finalValue) === true){
            finalValue = parseFloat(finalValue.toFixed(2));
        }
        return finalValue;   
    }
}

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
        firstNumber = calculateNumberType(equation.split(" + ")[0]);
        secondNumber = calculateNumberType(equation.split(" + ")[1]);
        finalValue = operate(firstNumber,operand,secondNumber);
        outputScreen.textContent = String(finalValue); 
        return finalValue;
    }

    else if(equation.includes("-")){
        operand = "-";
        firstNumber = calculateNumberType(equation.split(" - ")[0]);
        secondNumber = calculateNumberType(equation.split(" - ")[1]);
        finalValue = operate(firstNumber,operand,secondNumber);
        outputScreen.textContent = String(finalValue); 
        return finalValue;
    }

    else if(equation.includes("x")){
        operand = "x";
        firstNumber = calculateNumberType(equation.split(" x ")[0]);
        secondNumber = calculateNumberType(equation.split(" x ")[1]);
        finalValue = operate(firstNumber,operand,secondNumber);
        outputScreen.textContent = String(finalValue); 
        return finalValue;
    }

    else if (equation.includes("%")){
        operand = "%";
        firstNumber = calculateNumberType(equation.split(" % ")[0]);
        secondNumber = calculateNumberType(equation.split(" % ")[1]);
        finalValue = operate(firstNumber,operand,secondNumber);
        outputScreen.textContent = String(finalValue); 
        return finalValue;
    }
}


const maxInputs = 10; 
let inputCount = 0;
let firstNum,operand,lastNum;
let hasDecimal = false;


const outputScreen = document.querySelector(".output-screen")
const operands = ["+","-","x","%"];
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
const buttondot = document.querySelector("#button-dot");
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
        equation = outputScreen.textContent;
        hasDecimal = false;
        buttondot.disabled = false;
        
        for (let operandIndex in operands){
            if (equation.includes(operands[operandIndex])){
                intermediateValue = evaluate(outputScreen.textContent);
                outputScreen.textContent = intermediateValue;
                outputScreen.textContent += ' ' + operandButtons[operandButton].textContent + ' ';
                return;
            }
        }
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

buttondot.addEventListener('click', () => {
    if (!hasDecimal) {
        outputScreen.textContent += '.';
        hasDecimal = true;
      }
      buttondot.disabled = hasDecimal;
})