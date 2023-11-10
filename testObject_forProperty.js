/**
 * What does method `hasOwnProperty` do in JavaScript?
 * 
The hasOwnProperty() method returns true if the specified 
property is a direct property of the object
— even if the value is null or undefined . 
The method returns false if the property is inherited,
or has not been declared at all
 */

var myObj = {
    gift : "kuju",
    pet : "kitten",
    bed : "puma"
}

function checkObj(checkProperty) {
    if (myObj.hasOwnProperty[checkProperty]) {
        return myObj[checkProperty];
    } else {
        return "Not found !"
    }
    return "Change me !"
}

console.log(checkObj("gift"));