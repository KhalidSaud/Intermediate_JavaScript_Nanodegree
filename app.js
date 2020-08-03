
    // Create Dino Constructor
    function Dino(name, height, weight, diet, image){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
        this.image = image;
    }

    // Create Dino Objects
    var anklyosaurus = new Dino('anklyosaurus', 26 ,8, 'Herbavor', 'images/anklyosaurus.png');
    var brachiosaurus = new Dino('brachiosaurus', 69 ,64 , 'Herbavor', 'images/anklyosaurus.png');
    var elasmosaurus = new Dino('elasmosaurus', 34  ,45, 'Herbavor', 'images/elasmosaurus.png');
    var pteranodon = new Dino('pteranodon', 6 ,0.1, 'Carnivor', 'images/pteranodon.png');
    var stegosaurus = new Dino('stegosaurus', 29.5 ,7.7, 'Herbavor', 'images/stegosaurus.png');
    var triceratops = new Dino('triceratops', 29.5,13.2, 'Herbavor', 'images/triceratops.png');
    var rex = new Dino('tyrannosaurus rex', 40, 14, 'Carnivor', 'images/tyrannosaurus rex.png');
    var pigeon = new Dino('pigeon', 0.82,0.002, 'Herbavor', 'images/pigeon.png');
    

    // Create Human Object
    var human = {
        name: "",
        feet: 0,
        inches: 0,
        weight: 0,
        diet: "Omnivor",
        image: 'images/human.png'
    };

    var dinoArray = [anklyosaurus, brachiosaurus, elasmosaurus, pteranodon, stegosaurus, triceratops, rex, pigeon];


    // Use IIFE to get human data from form
    function getUserData(e){
        human.name = e.target.elements.name?.value || "";
        human.feet = e.target.elements.feet?.value || 0;
        human.inches = e.target.elements.inches?.value || 0;
        human.weight = e.target.elements.weight?.value || 0;
        human.diet = e.target.elements.diet?.value || "";
    }
   
    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON  file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM
        function addTiles(){
            dinoArray = shuffle(dinoArray);


            var elements = document.getElementsByClassName("grid-item");
        
            var index = 0;
            for(i = 0; i < elements.length; i++){
                if(i == 4){
                    elements[i].innerHTML = `<img src="${human.image}">
                    <p><span id="${human.name}">${human.name} - ${human.feet} feet - ${human.weight} lbs - ${human.diet}</span></p>`;
                } else {
        
                    elements[i].innerHTML = `<img src="${dinoArray[index].image}">
                    <p><span id="${dinoArray[index].name}">${dinoArray[index].name} - ${dinoArray[index].height} feet - ${dinoArray[index].weight} tons - ${dinoArray[index].diet}</span></p>
                    `;
                    index++;
                }
                
            }
        
        
            myForm.style.display = "none";
            document.getElementById("grid").style.display = "flex";
            document.getElementById("backBtn").style.display = "block";
        }
    // Remove form from screen


// On button click, prepare and display infographic
const myForm = document.getElementById("dino-compare");
    
myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    getUserData(e);

    addTiles();
});

// Back btn to form
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