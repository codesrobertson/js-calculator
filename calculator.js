// Set a constant array of validOperations 
const validOperations = ['+', 'add', '-', 'subtract', '/', 'divide', '*', 'multiply']

// Valid inputs
const aInput = {
  num1: 3,
  num2: 5,
  operation: 'add' || '+',
}

const sInput = {
  num1: 4,
  num2: 2,
  opertion: 'subtract' || '-',
}

const dInput = {
  num2: 15,
  num2: 3,
  operation: 'divide' || '/',
}

const mInput = {
  num1: 5,
  num2: 10,
  operation: 'multiply' || '*',
}

// Invalid inputs
const badInput1 = {
  num1: NaN,
  num2:!NaN, 
  operation: '*',
}

const badInput2 = {
  num1: !NaN, 
  num2: NaN,
  operation: '/',
}

// Set a constant array of invalidOperations for easy check later
const invalidOperations = !!validOperations.includes()

const badInput3 = {
  num1: !NaN,
  num2: !NaN, 
  operation: 'Virginia Ham', 
}

function validateNums(input) {
  if (input.num1(NaN) || input.num2(NaN)) {
    console.log('I spot an error. Looks like one of your values was not numeric.'); 
  } else if (input.num1(NaN) && input.num2(NaN)) {
    console.log('I spot an error. Looks like neither of your values was numeric.'); 
  } else {
    return true; }
}

function validateOperator(input) {
  if (!validOperations.includes(input.operation)) {
    console.log('I spot an error. Looks like your operator isn\'t for addition, subtraction, multiplication, or division.'); }
  else {
    return true; }
}

function calculate(input) {
  if (!validateNums(input) || !validateOperator(input)) {
    return false; }
  else {
    return true
  }
}




// CLI Greeting
console.log('Welcome to the JavaScript CLI Calculator!')