//Record collection
//Accessing Nested Array

var collection ={
    "2548" : {
        "album" : "Slippery when wet",
        "artist" : "Bon jovi",
        "track" : [
            "Let it rock",
            "You gave love bad name"
        ]
    },
    "2549" : {
        "album" : "1999",
        "artist" : "prince",
        "track" : [
            "1999",
            "little Red Corvettet"
        ]
    },
    "1234": {
        "artist": "Jhon Wick",
        "track": []
    },
    "5439" : {
        "album" : "ABC gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updatedRecord(id, prop, value) {
    
    // Delete property id it has empty value
    // else create traks value
    if (value === " ") {
        delete collection[id][prop];
    } else if (prop === "track") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop] = push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log("Copy", collectionCopy);

updatedRecord(2548, "tracks", "my_test");
console.log(updatedRecord(5439, "artist", "ABBA")); 