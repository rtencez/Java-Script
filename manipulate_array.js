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
