// Manipulate Complex Object

var music = [
    {
        "artist": "Eminem",
        "title": "Slim shadey",
        "release_year": 1973,
        "format": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Eminem",
        "title": "Slim shadey",
        "release_year": 1973,
        "format": [
            "youtube"
        ]
    }
];

console.log(music);

// Accessing Nested Objects

var myStorage= {
    "car" : {
        "inside" : {
            "glove box" : "maps",
            "stering" : "round"
        },
        "outside" : {
            "paint" : "white",
            "wheel" : 4
        }
    }
};

var wheelCount = myStorage.car.outside["wheel"];
console.log(wheelCount);


// Accessing Nested Array
var myPlant = [
    {
        type : "flower",
        list : [
            "rose",
            "red rose",
            "white rose"
        ]
    },
    {
        type : "tree",
        list : [
            "coconut tree",
            "mango tree",
            "pine"
        ]
    }
];
console.log(myPlant);

var firtstFlower = myPlant[0].list[2];
console.log(firtstFlower);