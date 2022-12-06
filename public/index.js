var wood = 0 // User wood total
var wpc = 1 // Wood per click
var wps = 0 // Wood per second
const fps = 30 // FPS

// Grab items from the DOM
var woodButton = document.getElementById('wood-button')
var woodNumber = document.getElementById('wood-title')
var axe = document.getElementsByClassName('axe')[0]
var axeTitle = document.getElementById('axe-title')
var autoAxe = document.getElementsByClassName('auto-axe')[0]
var autoAxeTitle = document.getElementById('auto-axe-title')
var chainsaw = document.getElementsByClassName('chainsaw')[0]
var chainsawTitle = document.getElementById('chainsaw-title')
var autoChainsaw = document.getElementsByClassName('auto-chainsaw')[0]
var autoChainsawTitle = document.getElementById('auto-chainsaw-title')
var flameThrower = document.getElementsByClassName('flame-thrower')[0]
var flameThrowerTitle = document.getElementById('flame-thrower-title')
var autoFlameThrower = document.getElementsByClassName('auto-flame-thrower')[0]
var autoFlameThrowerTitle = document.getElementById('auto-flame-thrower-title')

// Button prices
var axePrice = 25
var autoAxePrice = 50
var chainsawPrice = 75
var autoChainsawPrice = 150
var flameThrowerPrice = 125
var autoFlameThrowerPrice = 375

// Dev mode (for testing)
var devMode = false
if(devMode) {
    wood += 1000000
}

// Update wood value in DOM
function updateWood() {
    woodNumber.textContent = "Wood Count: " + Math.round(wood)
}

// Exponential increase
function increaseVar(temp) {
    temp = Math.round(temp * 1.25)
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
        axeTitle.textContent = "Buy Axe - " + axePrice
    } else {
        alert("You are running low on wood")
    }
}

// Click with chainsaw
function chainsawWood() {
    if(wood >= chainsawPrice) {
        wpc += 3
        wood -= chainsawPrice
        chainsawPrice = increaseVar(chainsawPrice)
        updateWood()
        chainsawTitle.textContent = "Buy Chainsaw - " + chainsawPrice
    } else {
        alert("You are running low on wood")
    }
}

// Click with flame thrower
function flameThrowWood() {
    if(wood >= flameThrowerPrice) {
        wpc += 5
        wood -= flameThrowerPrice
        flameThrowerPrice = increaseVar(flameThrowerPrice)
        updateWood()
        flameThrowerTitle.textContent = "Buy Flame Thrower - " + flameThrowerPrice
    } else {
        alert("You are running low on wood")
    }
}

// Auto axe
function autoAxes() {
    if(wood >= autoAxePrice) {
        wps += 1
        wood -= autoAxePrice
        autoAxePrice = increaseVar(autoAxePrice)
        updateWood()
        autoAxeTitle.textContent = "Buy Auto Axe - " + autoAxePrice
    } else {
        alert("You are running low on wood")
    }
}

// Auto chainsaw
function autoChainsaws() {
    if(wood >= autoChainsawPrice) {
        wps += 3
        wood -= autoChainsawPrice
        autoChainsawPrice = increaseVar(autoChainsawPrice)
        updateWood()
        autoChainsawTitle.textContent = "Buy Auto Chainsaw - " + autoChainsawPrice
    } else {
        alert("You are running low on wood")
    }
}

// Auto flame thrower
function autoFlameThrowers() {
    if(wood >= autoFlameThrowerPrice) {
        wps += 3
        wood -= autoFlameThrowerPrice
        autoFlameThrowerPrice = increaseVar(autoFlameThrowerPrice)
        updateWood()
        autoFlameThrowerTitle.textContent = "Buy Auto Flame Thrower - " + autoFlameThrowerPrice
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
chainsaw.addEventListener('click', chainsawWood)
autoChainsaw.addEventListener('click', autoChainsaws)
flameThrower.addEventListener('click', flameThrowWood)
autoFlameThrower.addEventListener('click', autoChainsaws)