
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form

    // console.log('Test');
    // var submitButton = document.getElementById('btn').addEventListener('click', function(){
    //     var form = document.getElementById('dino-compare').forms[0];
    //     document.forms.elements
    //     console.log(form.elements);
    // });

    const myForm = document.getElementById("dino-compare");
    var name = "";
    var heightInFeet = 0;
    var heightInInches = 0;
    var weight = 0;
    var diet = "";

    myForm.addEventListener("submit", (e) => {
        e.preventDefault();

        name = e.target.elements.name?.value || "";
        heightInFeet = e.target.elements.feet?.value || 0;
        heightInInches = e.target.elements.inches?.value || 0;
        weight = e.target.elements.weight?.value || 0;
        diet = e.target.elements.diet?.value || "";

        console.log(name);
        console.log(heightInFeet);
        console.log(heightInInches);
        console.log(weight);
        console.log(diet);

    });
    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
