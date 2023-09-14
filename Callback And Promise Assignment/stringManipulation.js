const inputString = "Hello, World!";

function manipulateString(inputString) {
  
    const manipulatedString = inputString.toUpperCase()

    function logString() {
        console.log(`The manipulated string is ${manipulatedString}`);
    }
    return logString;
}
  
const logManipulatedString = manipulateString(inputString);
  
logManipulatedString()
  