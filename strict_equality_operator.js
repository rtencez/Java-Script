/*
`===` triple eual sign refers to `Strict equality operator`
*/

function testStrict(val) {
    if(val === 12){
        return "Equal";
    }
    return "Not Equal"
}
console.log(testStrict('12'));