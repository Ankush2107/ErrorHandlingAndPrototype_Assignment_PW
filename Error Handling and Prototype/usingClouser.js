const numbers = [1, 2, 3, 4, 5];

function numberChecker(numbersArray) {
    return function(numberToCheck) {
      return numbersArray.includes(numberToCheck);
    };
}
  
const checkNumber = numberChecker(numbers);
  
console.log(checkNumber(3)); 
console.log(checkNumber(6)); 