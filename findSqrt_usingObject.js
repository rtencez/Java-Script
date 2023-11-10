/**
 * Find Square root number between 1 to 9
 */

function findSqrt(val) {
    var result = "";

    var numbers = {
        1: 1,
        2: 4,
        3: 9,
        4: 8,
        5: 25,
        6: 36,
        7: 49,
        8: 64,
        9: 81
    };

    result = numbers[val];

    return result;
}

console.log(findSqrt(9));