const numbers = [1, 2, 3, 4, 5];

function doubleArrayElements(arr, callback) {
    return arr.map(callback);
} 
  
function double(number) {
  return number * 2;
}
  
const doubledNumbers = doubleArrayElements(numbers, double);
console.log(doubledNumbers); 
  