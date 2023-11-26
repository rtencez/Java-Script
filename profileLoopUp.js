/**
 * 
 * Coding Challenge
 * Create a function that passes the 2 arrgument, name and property
 * Using contacts collection, when name and prop is passed, get the value of passed property or prop
 * 
 */

var contacts = [
    {
        "firstName": "Akira",
        "LastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "LastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "LastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "LastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
        return "No such Contact";
    }
}

var data = lookUpProfile("Akira", "number");

console.log(data);