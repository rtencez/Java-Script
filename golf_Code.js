/*
 Stroke         Return
 1              "Hole-in-one!"
 <= par -2      "Eagle"
 par - 1        "Bridie"
 par            "Par"
 par + 1        "Bogey"
 par + 2        "Double Bogey"
 >= par + 3     "Go Home!"
 */

var names = ["Hole-in-one!", "Eagle", "Bridie", "Par", "Bogey", "Double Boggy","Go Home!"];
function golfScore(par, stroke) {
    if (stroke == 1) {
        return names[0]
    } else if (stroke <= par - 2) {
        return names[1]
    } else if (stroke == par - 1) {
        return names[2] 
    } else if (stroke == par) {
        return names[3]
    } else if (stroke == par + 1) {
        return names[4]
    } else if (stroke == par + 2) {
        return names[5]
    } else if (stroke >= par + 3) {
        return names[6]
    }
    
    return "Change Me";
}
 console.log(golfScore(1,5));



