function chainIfElse(val) {
    var answer ="";

    if(val === "bob") {
        answer = "Marley";
    } else if(val == 42){
        answer ="The answer";
    } else if (val == 1) {
        answer ="There is no number #1"
    } else if( val == 21) {
        answer = "Missed you so much"
    }
    return answer;
} console.log(chaintoSwitch(1));
 
/**
  * Convert this If else condition to switch statement
  */

function chaintoSwitch(val) {
    var answer ="";

    switch(val){
      
    case 1: "bob" 
        answer = "Marley";
        break;
    case 2 :42 
        answer ="The answer";
    case 3 :1
        answer ="There is no number #1"
    case 3: 21
        answer = "Missed you so much"
    }
    return answer;
} console.log(chaintoSwitch(3));