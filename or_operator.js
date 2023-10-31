/*
Comparision with logical OR operator 
-Operator/Symbol used : ||
-return "true" when any one comparision values is true
 otherwise return "false"
*/


function testLogicalOr(val) {
    
    if( val < 10 || val > 20){
        return "INSIDE";  
    }
    return "OUTSIDE";
}

testLogicalOr(19);