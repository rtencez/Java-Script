/* 
Write a aswitch statement which tests val and set answer for following conditions:

1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
5 - "Sigma"
*/

function caseInSwitch(val) {
    var answer ="";

    switch (val) {
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;

        case 3:
            answer= "gama";
            break;

        case 4:
            answer = "delta";
            break;

        case 5:
            answer = "sigma";
            break;
 }

    return answer;
}
console.log( caseInSwitch(5));