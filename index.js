//FUNCTION 1: REVERSE A STRING
function reverseString(message) {
    var splitString = message.split("");
    var reversedString = splitString.reverse();
    return reversedString.join("");
}
console.log("Function 1: " + reverseString("hello")); //olleh

//FUNCTION 2: DETERMINE WHETHER A STRING IS A PALINDROME STRING
function palindrome(word) {
    var splitWord = word.split("");
    var reversedWord = splitWord.reverse().join("");

    if (word == reversedWord){
        return true;
    } else {
        return false;
    }

}
console.log("Function 2: " + palindrome("hello")); //false
console.log("Function 2: " + palindrome("abcba")); //true

//FUNCTION 3: SORT A STRING ALPHABETICALLY
//Function to Sort String using For Loop
function sortStringUF(messageUF) {
    var splitStringUF = messageUF.split("");

    for (var i=0; i<splitStringUF.length; i++) {
        for (var j=i; j<splitStringUF.length; j++) {
            if (splitStringUF[i] > splitStringUF[j]) {
                temp = splitStringUF[i];
                splitStringUF[i] = splitStringUF[j];
                splitStringUF[j] = temp;
            }
        } 
    }
    return splitStringUF.join("");
}

//Function to Sort String using sort() Method
function sortStringUS(messageUS) {
    var splitStringUS = messageUS.split("");
    var sortedStringUS = splitStringUS.sort();
    return sortedStringUS.join("");
}
console.log("Function 3 (Using For Loop): " + sortStringUF("hello")); //ehllo
console.log("Function 3 (Using sort() Method): " + sortStringUS("hello")) //ehllo

//FUNCTION 4: COUNT THE NUMBER OF WORDS IN A STRING
function countWords(message) {
    var splitString = message.split(" ");
    return splitString.length;
}
console.log("Function 4: " + countWords("Good morning, I love JavaScript.")); //5