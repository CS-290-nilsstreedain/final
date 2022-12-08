//const { application } = require("express")

var wood = 0 // User wood total
var wpc = 1 // Wood per click
var wps = 0 // Wood per second
const fps = 30 // FPS

// Grab items from the DOM
var woodButton = document.getElementById('wood-button')
var woodNumber = document.getElementById('wood-title')
var axe = document.getElementsByClassName('axe')[0]
var axeTitle = document.getElementById('axe-title')
var axeCount = document.getElementById('axe-counter')
var autoAxe = document.getElementsByClassName('auto-axe')[0]
var autoAxeTitle = document.getElementById('auto-axe-title')
var autoAxeCount = document.getElementById('auto-axe-counter')
var chainsaw = document.getElementsByClassName('chainsaw')[0]
var chainsawTitle = document.getElementById('chainsaw-title')
var chainsawCount = document.getElementById('chainsaw-counter')
var autoChainsaw = document.getElementsByClassName('auto-chainsaw')[0]
var autoChainsawTitle = document.getElementById('auto-chainsaw-title')
var autoChainsawCount = document.getElementById('auto-chainsaw-counter')
var flameThrower = document.getElementsByClassName('flame-thrower')[0]
var flameThrowerTitle = document.getElementById('flame-thrower-title')
var flamethrowerCount = document.getElementById('flamethrower-counter')
var autoFlameThrower = document.getElementsByClassName('auto-flame-thrower')[0]
var autoFlameThrowerTitle = document.getElementById('auto-flame-thrower-title')
var autoFlamethrowerCount = document.getElementById('auto-flamethrower-counter')
var leaderBoardLink = document.getElementsByClassName('leaderboard')[0]





// Button prices
var axePrice = 25
var autoAxePrice = 50
var chainsawPrice = 75
var autoChainsawPrice = 150
var flameThrowerPrice = 125
var autoFlameThrowerPrice = 375

//Button purchases
var axeNum = 0
var autoAxeNum = 0
var chainsawNum = 0
var autoChainsawNum = 0
var flamethrowerNum = 0
var autoFlamethrowerNum = 0

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
        axeNum += 1
        updateWood()
        axeTitle.textContent = "Buy Axe - " + axePrice
        axeCount.textContent = "Axes: " + axeNum 
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
        chainsawNum += 1
        updateWood()
        chainsawTitle.textContent = "Buy Chainsaw - " + chainsawPrice
        chainsawCount.textContent = "Chainsaws: " + chainsawNum

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
        flamethrowerNum += 1
        updateWood()
        flameThrowerTitle.textContent = "Buy Flame Thrower - " + flameThrowerPrice
        flamethrowerCount.textContent = "Flame throwers: " + flamethrowerNum 
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
        autoAxeNum += 1
        updateWood()
        autoAxeTitle.textContent = "Buy Auto Axe - " + autoAxePrice
        autoAxeCount.textContent = "Auto Axes: " + autoAxeNum 
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
        autoChainsawNum += 1
        updateWood()
        autoChainsawTitle.textContent = "Buy Auto Chainsaw - " + autoChainsawPrice
        autoChainsawCount.textContent = "Auto Chainsaws: " + autoChainsawNum 
    } else {
        alert("You are running low on wood")
    }
}

// Auto flame thrower
function autoFlameThrowers() {
    if(wood >= autoFlameThrowerPrice) {
        wps += 5
        wood -= autoFlameThrowerPrice
        autoFlameThrowerPrice = increaseVar(autoFlameThrowerPrice)
        autoFlamethrowerNum += 1
        updateWood()
        autoFlameThrowerTitle.textContent = "Buy Auto Flame Thrower - " + autoFlameThrowerPrice
        autoFlamethrowerCount.textContent = "Auto Flame throwers: " + autoFlamethrowerNum 
    } else {
        alert("You are running low on wood")
    }
}

function leaderboardAlert(){
    var leave = confirm("Wait! Leaving this page will clear all of your data! Are you sure?")
    console.log(leave)

    if(leave){
       window.location = '/leaderboard'
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
autoFlameThrower.addEventListener('click', autoFlameThrowers)
leaderBoardLink.addEventListener('click', leaderboardAlert)