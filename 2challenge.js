/* Start with an array of strings with a mix of uppercase and 
lowercase letters. Print every word in all lowercase letters.

goal = Given an array, print all strings in lowercase.
pseudocode = 
- make an array
- run a for loop iterating through each element
- print each element's corresponding lowercase string. 
*/

var array = ["Alpha", "beta", "CHARLIE", "delta", "eCho"]
for (var i=0; i<array.length; i++) {
   console.log(array[i].toLowerCase());
}
