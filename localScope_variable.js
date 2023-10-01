/*  Scope referes to visibility of variable.
    Local variable : Variable i.e declare in side the function & access only inside the function.
*/

function localVariable() {
    var num = 23;
    console.log(num);
}
localVariable();

console.log(num);   // ReferenceError: num is not defined