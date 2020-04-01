// Set array of valid operations 
const validOperations = ['+', 'add', '-', 'subtract', '/', 'divide', '*', 'multiply']

// Helper functions
function validateNums(input) {
  if (input.num1(NaN) || input.num2(NaN)) {
    return false; 
  } else if (input.num1(NaN) && input.num2(NaN)) {
    return false; 
  } else {
    return true; }
}

function validateOperator(input) {
  if (!validOperations.includes(input.operation)) {
    return false; }
  else {
    return true; }
}

const addMe = function(num1, num2) {
  return num1 + num2;
}

const subMe = function(num1, num2) {
  return num1 - num2;
}

const divMe = function(num1, num2) {
  return num1 / num2;
}

const mulMe = function(num1, num2) {
  return num1 * num2;
}

// Main function 
function calculate(input) {
  if (!validateNums(input)) {
    return ('I spot an error. Looks like one of your values was not numeric.');
  } else if (!validateOperator(input)) {
    return ('I spot an error. Looks like your operator isn\'t for addition, subtraction, multiplication, or division.'); 
  }

  const num1 = input.num1;
  const num2 = input.num2;
  const operator = input.operation;

  if (operator === '+' || operator === 'add') {
    return addMe(num1 + num2);

  } else if (operator === '-' || operator === 'subtract') {
      return subMe(num1 - num2);

  }else if (operator === '/' || operator === 'divide') {
      return divMe(num1 / num2);

  }else if (operator === '*' || operator === 'multiply') {
      return mulMe(num1 * num2);
  }
}

// Test Suite
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

const badInput1 = {
  num1: NaN,
  num2: !NaN,
  operation: '*',
}

const badInput2 = {
  num1: !NaN,
  num2: NaN,
  operation: '/',
}

const badInput3 = {
  num1: !NaN,
  num2: !NaN,
  operation: 'Virginia Ham',
}

console.log(calculate(aInput));
console.log(calculate(sInput));
console.log(calculate(dInput));
console.log(calculate(mInput));
console.log(calculate(badInput1));
console.log(calculate(badInput2));
console.log(calculate(badInput3));