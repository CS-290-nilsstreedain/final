var wood = 0 // User wood total
var wpc = 1 // Wood per click
var wps = 0 // Wood per second
var axePrice = 25
var autoAxePrice = 100
const fps = 30

var woodButton = document.getElementById('wood-button')
var woodNumber = document.getElementById('wood-number')
var axe = document.getElementById('axe')
var axeNumber = document.getElementById('axe-number')
var autoAxe = document.getElementById('auto-axe')
var autoAxeNumber = document.getElementById('auto-axe-number')

var devMode = true
if(devMode) {
    wood += 1000000
}

// Update user wood value in DOM
function updateWood() {
    woodNumber.textContent = "Wood Count: " + Math.round(wood)
}

// Exponential increase
function increaseVar(temp) {
    temp = Math.round(temp * 1.1)
    return temp
}

// Normal click
function chopWood() {
    wood += wpc
    updateWood()
}

// Click with axe
function axeWood() {
    if(wood >= axePrice) {
        wpc += 1
        wood -= axePrice
        axePrice = increaseVar(axePrice)
        updateWood()
        axeNumber.textContent = "Axe Price: " + axePrice
    } else {
        alert("You are running low on wood")
    }
}

function autoAxes() {
    if(wood >= autoAxePrice) {
        wps += 1
        wood -= autoAxePrice
        autoAxePrice = increaseVar(autoAxePrice)
        updateWood()
        autoAxeNumber.textContent = "Auto Axe Price: " + autoAxePrice
    } else {
        alert("You are running low on wood")
    }
}

setInterval(function() {
    wood += wps/fps
    updateWood()
}, 1000/fps)

woodButton.addEventListener('click', chopWood)
axe.addEventListener('click', axeWood)
autoAxe.addEventListener('click', autoAxes)