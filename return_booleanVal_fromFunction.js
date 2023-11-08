function isLess(a, b) {
    if( a < b ) {
        return true;
    }else{
        return false;
    }
} console.log(isLess(10,5));

/**
 * Insted of these if else statement, to return boolean value use below code
 */

function is_Less( a , b ) {
    return ( a < b );
}
console.log(is_Less( 10 , 50 ));