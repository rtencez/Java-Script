/*
The else statement to specify a block of code to be executed if the condition is false.
*/

function testElse(val) {

    var result ='';

    if (val > 5) {
        result="Bigger than 5";
    } else {
        result="5 or Smaller";
    }
        
    return result;
}
testElse(5);