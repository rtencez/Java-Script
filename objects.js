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