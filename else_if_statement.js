/**
 The else if statement to specify a new condition if the first condition is false.
 */

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val <5) {
        return "Smaller than 5";
    } else {
        return "Between 10 and 5";
    }
}

testElseIf(7);