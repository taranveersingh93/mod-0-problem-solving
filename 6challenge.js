/* 
1. Given a sentence with only lowercase letters, 
print the same sentence with the first letter of 
every word capitalized. For example, if you were
 given "Turing is the best", return 
 "Turing Is The Best" instead!

 goal = Start with a sentence, capitalize the first 
 alphabet of every word. Print the new sentence.

 pseudocode = 
 1 Declare a string/sentence.
 2 Create a function that splits a word's first character and the 
 remaining word. Capitalize the first character then concatenate the 
 splits. 
 3  Convert the sentence to an array of individual words somehow.
 4 loop through this array.
 5 call the function we created earlier inside this loop. 
 6 by now, all words should be as desired, join the array elements
 back to a single string and print out the sentence.
*/
//step 1
var sentence  = "this took me ages!";
//step 2
function capital(input) {
    var firstPart = input[0];
    firstPart = firstPart.toUpperCase();
    lastPart = input.slice(1);
    finalPart = firstPart+lastPart;
    return finalPart;
}
//step 3
sentenceArray = sentence.split(" ");
//step 4 and 5
for (var i=0; i<sentenceArray.length; i++) {
    sentenceArray[i] = capital(sentenceArray[i]);
}
//step 6
sentence = sentenceArray.join(" ");
console.log(sentence);
