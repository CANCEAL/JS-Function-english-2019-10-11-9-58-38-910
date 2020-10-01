//FUNCTION 4: COUNT THE NUMBER OF WORDS IN A STRING
function countWords(message) {
    var splitString = message.split(" ");
    return splitString.length;
}
console.log("Function 4: " + countWords("Good morning, I love JavaScript.")); //5