/*
testArr = [1,2,3,4,5,6,7];

remove 1st item in array and add new item to end of the index using function
and display array before and after

 */

function arrayAction(arr , item){
    arr.push(item);
   return arr.shift();
}

var testArr=[1,2,3,4,5,6,7]

console.log("Before :" + JSON.stringify(testArr));
console.log(arrayAction(testArr, 9));
console.log("After :" +JSON.stringify(testArr));