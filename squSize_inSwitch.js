function sequentialSize(val) {
    var answer = "";

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "LOW";
            break;

        case 4:
        case 5:
        case 6:
            answer = "MEDIUM";
            break;

        case 7:
        case 8:
        case 9:
            answer = "HIGH";
            break;

    }
    return answer;
    
}
console.log(sequentialSize(3));