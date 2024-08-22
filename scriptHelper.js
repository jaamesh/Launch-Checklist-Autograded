// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    let missionTarget = document.getElementById("missionTarget");

    let missionTargetHtml = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`;
    
    missionTarget.innerHTML = missionTargetHtml;    
    
 }
 
 function validateInput(testInput) {
    if (testInput === null || testInput.length === 0) {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    const minFuelLevel = 10000;
    const maxCargoMass = 10000;
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    if (validateInput(pilot) !== "Empty" && validateInput(copilot) !== "Empty" && validateInput(fuelLevel) !== "Empty" && validateInput(cargoMass) !== "Empty") {
        if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && validateInput(fuelLevel) === "Is a Number" && validateInput(cargoMass) === "Is a Number") {
            let launchStatus = document.getElementById("launchStatus");
            let readyForLaunch = true;
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            if (Number(fuelLevel) >= minFuelLevel) {
                fuelStatus.innerHTML = "Fuel level high enough for launch";
            } else {
                fuelStatus.innerHTML = "Fuel level too low for launch";
                readyForLaunch = false;
            }
            if (Number(cargoMass) < maxCargoMass) {
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
            } else {
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                readyForLaunch = false;
            }
            if (readyForLaunch) {
                launchStatus.style.color = "green";
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
            } else {
                launchStatus.style.color = "red";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            }
        }
        else {
            launchStatus.style.color = "black";
            launchStatus.innerHTML = "Awaiting Information Before Launch";
            list.style.visibility = "hidden";
            alert("Make sure to enter valid information for each field");
        }
    } else {
        launchStatus.style.color = "black";
        launchStatus.innerHTML = "Awaiting Information Before Launch";
        list.style.visibility = "hidden";
        alert("All fields are required!");
    }
 }
 

 async function myFetch() {
 
    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");

    return await response.json();

 }


 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
 }

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
