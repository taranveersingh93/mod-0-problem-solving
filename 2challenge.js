/* Start with an array of strings with a mix of uppercase and 
lowercase letters. Print every word in all lowercase letters.

goal = Given an array, print all lowercase strings.
pseudocode = 
- make an array
- run a for loop iterating through each element
- Either check if a word has all lowercase or any uppercase. Depending
on the condition, the outcome will print either "true" all lowercase strings
or "false" any uppercase strings.
*/

array = ["Alpha", "beta", "CHARLIE", "delta", "eCho"]
for (var i=0; i<array.length; i++) {
    if (array[i]===array[i].toLowerCase()) {
        console.log(`${array[i]}`)
    }
}