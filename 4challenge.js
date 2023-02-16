/* 1. Start with an array of strings. Print only the words that 
include the letter combination "ing".

goal = from an array, print all words that 
pseudocode = 
- make an array of strings.
- run a for loop
- check an if condition for whether or not the string has the combination 
"ing"
- if false, do nothing; if true, print to console. 
*/
var array = ["bake", "bakery", "baking", "baked", "ingsample", "sampling"];
for(var i=0; i<array.length; i++) {
    if(array[i].includes("ing")===true) {
        console.log(array[i]);
    }
}