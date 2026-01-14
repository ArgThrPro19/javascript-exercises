const add = function(a, b) {
  return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0
  for(const num of arr){
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  for(const num of arr){
    sum *= num;
  }
  return sum;
};

const power = function(base, exp) {
	return base**exp; 
};

const factorial = function(n) {
	let result = 1;
  for(let i = n; i > 0; i--){
    result *= i;
  }
  return result; 
};

//COMPLETE

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
