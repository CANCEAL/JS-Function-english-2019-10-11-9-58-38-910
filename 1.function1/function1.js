//FUNCTION 1: REVERSE A STRING
function reverseString(message) {
    var splitString = message.split("");
    var reversedString = splitString.reverse();
    return reversedString.join("");
}
console.log("Function 1: " + reverseString("hello")); //olleh