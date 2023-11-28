function randonRange(minNum, maxNum){
    return Math.floor(Math.random()* (maxNum - minNum +1) )+ minNum;
}
console.log(randonRange(1,3));