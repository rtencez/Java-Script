//Push() method : Data added to end of the array

var myArray = [12,21,21,432];
// Array before push :  [ 12, 21, 21, 432 ]

myArray.push(['simpson','noland']);
console.log('Array after push :',myArray);

// Example 2 
var exa = [12,'good','note','yagami',[87,34,65,23]];
exa.push([82,'added', 'Array'])

console.log(exa);

// Pop() method : Remove item from end of the array

var removeArray = [1,3,4,'kjhbbm']
removeArray.pop();

console.log(removeArray);

//Example 2 
var carPart = ['tire','engine','petrol', ['seat','baterry']];
carPart.pop();

console.log(carPart);

// Shift() method : similar to pop method but here Remove first item in array

var shiftArray = [[12,13,223],['sd','fd','we'],'sd',32];
shiftArray.shift();

console.log(shiftArray);
// [ [ 'sd', 'fd', 'we' ], 'sd', 32 ]

//Example 2 :
var person = ['madara','kuju','tutta','orbito'];
person.shift(); // removes madara

console.log(person);


// unshift() method : similar to push, here insert new item to beginning of array

var unshiftArray = ['dog',21,32,423];
unshiftArray.unshift("cat");

console.log(unshiftArray);

var fight = ['takewondo','karate','muay thai','judo'];
fight.shift();  // remove 'takewondo'
fight.unshift('boxing');    // add 'boxing' to 0 index

console.log(fight);