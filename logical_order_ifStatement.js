/**
 * Logical order in If Statement
 */

function logicalNotInOrder(val) {
    if (val < 10) {
        return "value is less than 10";
    } else if( val < 5) {
        return "value is less than 5";
    } else {
        return "value is less than or equal to 10";
    }
}
logicalNotInOrder(7);
// to maintain the ordering in logic keep rearrange it.

// here is the ordered corrected code.
function logicalOrder(val) {
    if (val < 5) {
        return "value is less than 5";
    } else if( val < 10) {
        return "value is less than 10";
    } else {
        return "value is less than or equal to 10";
    }
}
logicalOrder(8);