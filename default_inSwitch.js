function defaultInSwitch(val) {
    var answer ="";

    switch (val) {
        case "a":
            answer="Toyota";
            break;
        case "b":
            answer="Honda";
            break;

        case "c":
            answer= "Suzuki";
            break;

        case "d":
            answer = "BMW";
            break;
            
        default:
            answer = "Hero";
            break;

 }
    return answer;
}
console.log( defaultInSwitch(5));