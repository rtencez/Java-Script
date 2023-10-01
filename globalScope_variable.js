/*  Scope referes to visibility of variable.
    Global variable : Variable i.e declare out side the function & access it from anywhere.
*/

var num1 = 10;      // Global variable

function func1() {
    num2 = 8934210; // keyword is not defined then it tale `num2` as global variable
}

function func2() {
    var output = "";

    if(typeof num1 != 'undefined') {
        output += "my Global ="+ num1;
    }

    if(typeof num2 != 'undefined') {
        output += "my Global num2 ="+ num2;
    }
    console.log(output);
}

func1();
func2();