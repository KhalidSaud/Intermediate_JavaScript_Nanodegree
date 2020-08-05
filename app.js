
$(document).ready(function () {
    $.getJSON('dino.json', function (data) {

        var dinos = data.Dinos.map( function(dino) {
        
            var newDino = new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact);
            return newDino;
        });

        MainDinos.setDinos(dinos);
    });
});

// BluePrint  Constructur
function BluePrint(species, weight, height, diet){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;

    this.image = function () {
        return `images/${species.toLowerCase()}.png`;
    };
}


function Dino(species, weight, height, diet, where, when, fact){
    BluePrint.call(this, species, weight, height, diet);

    this.where = where;
    this.when = when;
    this.fact = fact;

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    this.weightComparison = function (human) {
        // console.log('test');
        if(human.weight > this.weight){
            return `You're heavier than ${this.species}`;
        } else {
            return `${this.species} is heavier than You`;
        }
    };

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    this.heightComparison = function (human) {
        if(human.height > this.height){
            return `You're taller than ${this.species}`;
        } else {
            return `${this.species} is taller than You`;
        }
    };

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON  file is in lbs, height in inches.
    this.dietComparison = function (human) {
        if(human.diet === this.diet){
            return `${this.species} is ${this.diet} like You`;
        } else {
            return `${this.species} is ${this.diet} unlike You`;
        }
    };

    this.randomizeFact = function(human) {
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                return this.weightComparison(human);
            case 1:
                return this.heightComparison(human);
                case 2:
                return this.dietComparison(human);
            default:
                text = "No facts for you this time!";
            }
    };
}


const MainDinos = {
    dinos: [],
    setDinos: function(newDinos){
        dinos = newDinos;
    },
    getDinos: function(){
        return dinos;
    }

}

// Create Human Object
function Human(species, name, weight, height, diet){
    BluePrint.call(this, species, weight, height, diet);

    this.name = name;
}

var human = new Human('Human');


// Use IIFE to get human data from form
function getUserData(e){
    human.name = e.target.elements.name?.value || "";
    human.feet = e.target.elements.feet?.value || 0;
    human.inches = e.target.elements.inches?.value || 0;
    human.weight = e.target.elements.weight?.value || 0;
    human.diet = e.target.elements.diet?.value || "";
}


// Generate Tiles for each Dino in Array

    // Add tiles to DOM
function addTiles(){

    var dinoArray = MainDinos.getDinos();
    dinoArray = shuffle(dinoArray);
    var elements = document.getElementsByClassName("grid-item");

    var index = 0;
    for(i = 0; i < elements.length; i++){
        if(i == 4){
            elements[i].innerHTML = `<img src="${human.image()}">
            <p><span id="${human.name}">${human.name} - ${human.feet} feet - ${human.weight} lbs - ${human.diet}</span></p>`;
        } else {
            elements[i].innerHTML = `<img src="${dinoArray[index].image()}">
            <p><span id="${dinoArray[index].species}">${dinoArray[index].randomizeFact(human)}</span></p>
            `;
            index++;
        }
    }

    myForm.style.display = "none";
    document.getElementById("grid").style.display = "flex";
    document.getElementById("backBtn").style.display = "block";
}


// On button click, prepare and display infographic
const myForm = document.getElementById("dino-compare");
    
myForm.addEventListener("submit", (e) => {

    e.preventDefault();

    getUserData(e);

    addTiles();
});

// Remove form from screen
document.getElementById("backBtn").addEventListener('click', () => {
    document.getElementById("grid").style.display = "none";
    document.getElementById("backBtn").style.display = "none";
    myForm.style.display = "block";
});

// Shuffle array

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }