const sumAll = function(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }
        
    let sum = 0;
    let currentNumber = num1;
    let untilNumber = num2;

    if(num1 > num2){
        currentNumber = num2;
        untilNumber = num1;
    }

    while(currentNumber < untilNumber+1){
        sum += currentNumber;
        currentNumber++;
    }

    if(sum < 0) return "ERROR";

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
