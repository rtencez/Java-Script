/*
Comparision with logical AND operator 
-Operator/Symbol used : &&
-return "true" when both values in comparision is true
 otherwise return "false"
*/

function testLogicalAnd(val) {
    
    if( val <=50 && val >=25){
        return "YES";  
    }
    return "NO";
}

testLogicalAnd(19);