/*
1. Given an array of strings, return only the words that begin with 
the letter "t".

goal = from an array, print all words starting with "t"

pseudocode = 
- make an array which has some words starting with "t"
- run a for loop 
- check for an if statement (for whether the string begins with "t")
- if false, do nothing; if true, print to console.
*/ 

var array = ["three", "four", "thirty", "fifty"];
for(var i=0; i<array.length; i++) {
    if(array[i].startsWith("t")===true) {
        console.log(array[i]);
    }
}