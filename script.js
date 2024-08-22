// Write your JavaScript code here!

window.addEventListener("load", function() {


    let testForm = document.getElementById("launchForm");
    testForm.addEventListener("submit", function(event) {
        formSubmission(document, document.getElementById("faultyItems"), document.getElementsByName("pilotName")[0].value, document.getElementsByName("copilotName")[0].value, document.getElementsByName("fuelLevel")[0].value, document.getElementsByName("cargoMass")[0].value);
        event.preventDefault();
    });
    
    
     myFetch().then(function(json) {
        listedPlanets = json;
        chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
    })

    
 });