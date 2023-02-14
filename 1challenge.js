// Given an array of strings, return only the strings that
// have exactly 4 characters.

/* 
Goal = Print all 4 character strings from a given array.
Pseudocode = 
- make an array
- run a for loop iterating through each element.
- run an if condition checking if the string.length = 4
- if false, do nothing; if true, print it to the console.
*/

var array = ["alpha", "beta", "charlie", "delta", "foxtrot", "golf"];
for (var i=0; i<array.length; i++) {
    if(array[i].length===4) {
        console.log(`${array[i]}`)
    }
}