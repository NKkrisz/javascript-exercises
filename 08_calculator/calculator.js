const add = function(num1, num2) {
  if(typeof(num1) == "number" && typeof(num2) == "number") return num1 + num2
  return "ERROR"
};

const subtract = function(num1, num2) {
	if(typeof(num1) == "number" && typeof(num2) == "number") return num1 - num2
  return "ERROR"
};

const sum = function(arr) {
  let result = 0
	arr.forEach((num) => result += num)
  return result
};

const multiply = function(arr) {
  let result = arr[0]
  for (let index = 1; index < arr.length; index++) {
    result *= arr[index]
  }
  return result
};

const power = function(num1, num2) {
	if(typeof(num1) == "number" && typeof(num2) == "number") return num1 ** num2
  return "ERROR"
};

const factorial = function(num) {
  if(num === 0) return 1
	let result = num
  for(let i = num-1; i > 0; i--){
    result = result * i
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
