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