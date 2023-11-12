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