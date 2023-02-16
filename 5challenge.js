/* Start with an array of travel destinations. Print every travel 
destination in alphabetical order embedded in a sentence using 
string interpolation. For example, if the destination is 
"New York City", print something like "The next place I 
want to visit is New York City!" 

goal = Starting from an array of destinations, arrange them alphabetically
then one by one embed them in a sentence.

pseudocode = 
- create an array of destinations
- sort the array alphabetically
- using a for loop, interpolation, log sentences for each destination.
*/

var array = ["New York", "California", "Philadelphia", "Vancouver"];
array.sort();
for(i=0; i<array.length; i++) {
    console.log(`The next place I want to visit is ${array[i]}.`);
}