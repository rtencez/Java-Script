//  keyword used : for
// General form of for loop:
// for(initialization; condition; finalExprestion) {
// 
// }
 
var ourArray = [];

for (var i =0; i <5; i++) {
    ourArray.push(i);
}
console.log(ourArray); 

for (var i = 1; i < 6; i++){
    ourArray.push(i);
}
console.log(ourArray);

// Add odd number to array  with for loop

var oddNum =[];

for(var i=9; i>0; i-=2){
    oddNum.push(i);
};
console.log(oddNum);

