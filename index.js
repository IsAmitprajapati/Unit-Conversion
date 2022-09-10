/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el");
let btnEl = document.getElementById("btn-el");
let lengthEl = document.getElementById("length-meter-feet");
let volumeEl = document.getElementById("valume-liters-gallons");
let massEl = document.getElementById("mass-kilogram-pounds")
let controlIcon = document.getElementById("control-icon")
let controlLightDark = document.getElementById("control-light-dark")

btnEl.addEventListener("click", function () {
    allFunction()
})

function allFunction(){
    lengthEl.textContent = lenght(inputEl.value);
    volumeEl.textContent = volume(inputEl.value);
    massEl.textContent = mass(inputEl.value);
}
allFunction()



function lenght(input) {
    let lengthString = `
        ${input} meters = ${(3.281 * input).toFixed(3)} feet | ${input} feet = ${(input / 3.281).toFixed(3)} meters
    `
    return lengthString;
}

function volume(input) {
    let volumeString = `
        ${input} liters = ${(0.264 * input).toFixed(3)} gallons | ${input} gallons = ${(input / 0.264).toFixed(3)} liters
    `
    return volumeString;
}

function mass(input) {
    let massString = `
        ${input} kilos = ${(2.204 * input).toFixed(3)} pounds | ${input} pounds = ${(input / 2.204).toFixed(3)} kilos
    `
    return massString;
}


//light dark mode
let isDark = false;
controlLightDark.addEventListener("click", function () {
    isDark = !isDark;
    let bodyEl =document.getElementById("body") 
    let sectionContainerEl = document.querySelector(".section-container")
    
    let darkboxEl1 = document.getElementById("darkbox1")
    let darkboxEl2 = document.getElementById("darkbox2")
    let darkboxEl3 = document.getElementById("darkbox3")
    
    let lengthTitleEl1 = document.getElementById("length-title1")
    let lengthTitleEl2 = document.getElementById("length-title2")
    let lengthTitleEl3 = document.getElementById("length-title3")
    if (isDark) {
        controlIcon.classList.remove("fa-moon")
        controlIcon.classList.add("fa-sun")
        bodyEl.classList.add("body");
        
        darkboxEl1.classList.add("darkbox")
        darkboxEl2.classList.add("darkbox")
        darkboxEl3.classList.add("darkbox")
        
        lengthEl.classList.add("darkP")
        volumeEl.classList.add("darkP")
        massEl.classList.add("darkP")
        
        lengthTitleEl1.classList.add("darkHeading")
        lengthTitleEl2.classList.add("darkHeading")
        lengthTitleEl3.classList.add("darkHeading")
    }
    else{
        controlIcon.classList.remove("fa-sun")
        controlIcon.classList.add("fa-moon")
        bodyEl.classList.remove("body");
        
        darkboxEl1.classList.remove("darkbox")
        darkboxEl2.classList.remove("darkbox")
        darkboxEl3.classList.remove("darkbox")
        
        lengthEl.classList.remove("darkP")
        volumeEl.classList.remove("darkP")
        massEl.classList.remove("darkP")
        
        lengthTitleEl1.classList.remove("darkHeading")
        lengthTitleEl2.classList.remove("darkHeading")
        lengthTitleEl3.classList.remove("darkHeading")
    }
})

