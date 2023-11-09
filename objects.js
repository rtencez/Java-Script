/**
 * Similar to array, More info: https://www.w3schools.com/js/js_object_definition.asp
 *              <datatype> objectName ={
 *                          "property": value;             
 *               };
 */
 
var school = {
    "name": "schoolName",
    "address": "address",
    "students": ["student!","student2"], // Array of students in the school
};

//Access property in Objects using dot notation

var nameValue = school.name;
var studentsValue = school.students;

console.log(nameValue);
console.log(studentsValue);

// Access objects's property using Bracket notation

var testObj = {
    "an entree": "hamburger",
    "my side": "vaggies",
    "the drink": "coffee"
}

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(entreeValue);
console.log(drinkValue);

//Access object properties with variable

var testObj2 ={
    12: "drone",
    13: "fligth",
    14: "car",
    15: "bus"
};

var objNumber = 13;
var obj2 = testObj2[objNumber];

console.log(obj2);