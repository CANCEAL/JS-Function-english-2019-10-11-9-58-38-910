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