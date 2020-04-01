// Set array of valid operations 
const validOperations = ['+', 'add', '-', 'subtract', '/', 'divide', '*', 'multiply']

// Helper functions
function validateNums(input) {
  if (isNaN(input.num1) || isNaN(input.num2)) {
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
  console.log(num1, num2);
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
    console.log('I spot an error. Looks like one of your values was not numeric.');
    return NaN;
  } else if (!validateOperator(input)) {
    console.log('I spot an error. Looks like your operator isn\'t for addition, subtraction, multiplication, or division.'); 
    return NaN;
  }

  const num1 = input.num1;
  const num2 = input.num2;
  const operator = input.operation;

  if (operator === '+' || operator === 'add') {
    return addMe(num1, num2);

  } else if (operator === '-' || operator === 'subtract') {
      return subMe(num1, num2);

  }else if (operator === '/' || operator === 'divide') {
      return divMe(num1, num2);

  }else if (operator === '*' || operator === 'multiply') {
      return mulMe(num1, num2);
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
  operation: 'subtract' || '-',
}

const dInput = {
  num1: 15,
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
  num2: 5,
  operation: '*',
}

const badInput2 = {
  num1: 48,
  num2: NaN,
  operation: '/',
}

const badInput3 = {
  num1: 5,
  num2: 5,
  operation: 'Virginia Ham',
}

console.log("operation: '" + aInput.num1 + " " + aInput.operation + " " + aInput.num2 + "'");
console.log("expected: " + 8);
console.log("actual: " + calculate(aInput));
console.log("");

console.log("operation: '" + sInput.num1 + " " + sInput.operation + " " + sInput.num2 + "'");
console.log("expected: " + 2);
console.log("actual: " + calculate(sInput));
console.log("");

console.log("operation: '" + dInput.num1 + " " + dInput.operation + " " + dInput.num2 + "'");
console.log("expected: " + 5);
console.log("actual: " + calculate(dInput));
console.log("");

console.log("operation: '" + mInput.num1 + " " + mInput.operation + " " + mInput.num2 + "'");
console.log("expected: " + 50);
console.log("actual: " + calculate(mInput));
console.log("");

console.log("operation: '" + badInput1.num1 + " " + badInput1.operation + " " + badInput1.num2 + "'");
console.log("expected: " + NaN);
console.log("actual: " + calculate(badInput1));
console.log("");

console.log("operation: '" + badInput2.num1 + " " + badInput2.operation + " " + badInput2.num2 + "'");
console.log("expected: " + NaN);
console.log("actual: " + calculate(badInput2));
console.log("");

console.log("operation: '" + badInput3.num1 + " " + badInput3.operation + " " + badInput3.num2 + "'");
console.log("expected: " + NaN);
console.log("actual: " + calculate(badInput3));
console.log("");