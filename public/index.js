//const { application } = require("express")

var wood = 0; // User wood total
var wpc = 1; // Wood per click
var wps = 0; // Wood per second
const fps = 30; // FPS
var atw = 0; //All Time Wood

// Grab items from the DOM
var woodButton = document.getElementById("wood-button");
var woodNumber = document.getElementById("wood-title");
var axe = document.getElementsByClassName("axe")[0];
var axeTitle = document.getElementById("axe-title");
var axeCount = document.getElementById("axe-counter");
var autoAxe = document.getElementsByClassName("auto-axe")[0];
var autoAxeTitle = document.getElementById("auto-axe-title");
var autoAxeCount = document.getElementById("auto-axe-counter");
var chainsaw = document.getElementsByClassName("chainsaw")[0];
var chainsawTitle = document.getElementById("chainsaw-title");
var chainsawCount = document.getElementById("chainsaw-counter");
var autoChainsaw = document.getElementsByClassName("auto-chainsaw")[0];
var autoChainsawTitle = document.getElementById("auto-chainsaw-title");
var autoChainsawCount = document.getElementById("auto-chainsaw-counter");
var flameThrower = document.getElementsByClassName("flame-thrower")[0];
var flameThrowerTitle = document.getElementById("flame-thrower-title");
var flamethrowerCount = document.getElementById("flamethrower-counter");
var autoFlameThrower = document.getElementsByClassName("auto-flame-thrower")[0];
var autoFlameThrowerTitle = document.getElementById("auto-flame-thrower-title");
var autoFlamethrowerCount = document.getElementById(
  "auto-flamethrower-counter"
);
var leaderBoardLink = document.getElementsByClassName("leaderboard")[0];
var text = document.getElementById("cheers");

// Button prices
var axePrice = 25;
var autoAxePrice = 50;
var chainsawPrice = 75;
var autoChainsawPrice = 150;
var flameThrowerPrice = 125;
var autoFlameThrowerPrice = 375;

//Button purchases
var axeNum = 0;
var autoAxeNum = 0;
var chainsawNum = 0;
var autoChainsawNum = 0;
var flamethrowerNum = 0;
var autoFlamethrowerNum = 0;

// Dev mode (for testing)
var devMode = false;
if (devMode) {
  wood += 1000000;
  atw += 1000000;
}

// Update wood value in DOM
function updateWood() {
  woodNumber.textContent = "Wood Count: " + Math.round(wood);
  if (Math.round(wood) === "404") {
    text.innerHTML = "Log not found";
  } else if (Math.round(wood) === "1868") {
    text.innerHTML = "The start of something great";
  } else if (atw < "10") {
    text.innerHTML = "Get Chomping!";
  } else if (atw < "25") {
    text.innerHTML = "Look at you go!";
  } else if (atw < "50") {
    text.innerHTML = "Blazing a trail!";
  } else if (atw < "75") {
    text.innerHTML = "Spectacular!";
  } else if (atw < "100") {
    text.innerHTML = "Wow!";
  } else if (atw < "150") {
    text.innerHTML = "Amazing! Welcome to the 100 club!";
  } else if (atw < "200") {
    text.innerHTML = "Go eager beaver!";
  } else if (atw < "300") {
    text.innerHTML = "Phenomenal!";
  } else if (atw < "400") {
    text.innerHTML = "You're a star!";
  } else if (atw < "500") {
    text.innerHTML = "Wow!!!!";
  } else if (atw < "1000") {
    text.innerHTML = "Look at you fly!";
  } else if (atw < "2000") {
    text.innerHTML = "Maybe it's time for a break?";
  } else if (atw < "3000") {
    text.innerHTML = "Daaaaaaaaam!";
  } else if (atw < "4000") {
    text.innerHTML = "Elite!!!!";
  } else if (atw < "5000") {
    text.innerHTML = "Hall of Fame Material!!!";
  } else if (atw >= "5000") {
    text.innerHTML = "You're unstoppable!!!!!";
  }
}

// Exponential increase
function increaseVar(temp) {
  temp = Math.round(temp * 1.25);
  return temp;
}

// Normal click
function chopWood() {
  wood += wpc;
  atw += wpc;
  updateWood();
  logs();
  animate();
}

// Click with axe
function axeWood() {
  if (wood >= axePrice) {
    wpc += 1;
    wood -= axePrice;
    axePrice = increaseVar(axePrice);
    axeNum += 1;
    updateWood();
    axeTitle.textContent = "Buy Axe - " + axePrice;
    axeCount.textContent = "Axes: " + axeNum;
  } else {
    alert("You are running low on wood");
  }
}

// Click with chainsaw
function chainsawWood() {
  if (wood >= chainsawPrice) {
    wpc += 3;
    wood -= chainsawPrice;
    chainsawPrice = increaseVar(chainsawPrice);
    chainsawNum += 1;
    updateWood();
    chainsawTitle.textContent = "Buy Chainsaw - " + chainsawPrice;
    chainsawCount.textContent = "Chainsaws: " + chainsawNum;
  } else {
    alert("You are running low on wood");
  }
}

// Click with flame thrower
function flameThrowWood() {
  if (wood >= flameThrowerPrice) {
    wpc += 5;
    wood -= flameThrowerPrice;
    flameThrowerPrice = increaseVar(flameThrowerPrice);
    flamethrowerNum += 1;
    updateWood();
    flameThrowerTitle.textContent = "Buy Flame Thrower - " + flameThrowerPrice;
    flamethrowerCount.textContent = "Flame throwers: " + flamethrowerNum;
  } else {
    alert("You are running low on wood");
  }
}

// Auto axe
function autoAxes() {
  if (wood >= autoAxePrice) {
    wps += 1;
    wood -= autoAxePrice;
    autoAxePrice = increaseVar(autoAxePrice);
    autoAxeNum += 1;
    updateWood();
    autoAxeTitle.textContent = "Buy Auto Axe - " + autoAxePrice;
    autoAxeCount.textContent = "Auto Axes: " + autoAxeNum;
  } else {
    alert("You are running low on wood");
  }
}

// Auto chainsaw
function autoChainsaws() {
  if (wood >= autoChainsawPrice) {
    wps += 3;
    wood -= autoChainsawPrice;
    autoChainsawPrice = increaseVar(autoChainsawPrice);
    autoChainsawNum += 1;
    updateWood();
    autoChainsawTitle.textContent = "Buy Auto Chainsaw - " + autoChainsawPrice;
    autoChainsawCount.textContent = "Auto Chainsaws: " + autoChainsawNum;
  } else {
    alert("You are running low on wood");
  }
}

// Auto flame thrower
function autoFlameThrowers() {
  if (wood >= autoFlameThrowerPrice) {
    wps += 5;
    wood -= autoFlameThrowerPrice;
    autoFlameThrowerPrice = increaseVar(autoFlameThrowerPrice);
    autoFlamethrowerNum += 1;
    updateWood();
    autoFlameThrowerTitle.textContent =
      "Buy Auto Flame Thrower - " + autoFlameThrowerPrice;
    autoFlamethrowerCount.textContent =
      "Auto Flame throwers: " + autoFlamethrowerNum;
  } else {
    alert("You are running low on wood");
  }
}

function leaderboardAlert() {
  var leave = confirm(
    "Wait! Leaving this page will clear all of your data! Are you sure?"
  );
  console.log(leave);

  if (leave) {
    window.location = "/leaderboard";
  }
}

setInterval(function () {
  wood += wps / fps;
  atw += wps / fps;
  updateWood();
}, 1000 / fps);

woodButton.addEventListener("click", chopWood);
axe.addEventListener("click", axeWood);
autoAxe.addEventListener("click", autoAxes);
chainsaw.addEventListener("click", chainsawWood);
autoChainsaw.addEventListener("click", autoChainsaws);
flameThrower.addEventListener("click", flameThrowWood);
autoFlameThrower.addEventListener("click", autoFlameThrowers);
leaderBoardLink.addEventListener("click", leaderboardAlert);

//Animation
let count = 0;
let n = 4;
function animate() {
  document.getElementById("mouth").animate(
    [
      {
        transform: "rotate(-4deg) translateY(20px)",
      },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );

  document.getElementById("head").animate(
    [
      {
        transform: "scale(102%)",
      },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  let left = getRandomArbitrary(-70, -500) + "%";
  let top = getRandomArbitrary(0, -300) + "%";

  document.getElementById("log").animate(
    [
      {
        left: left,
        top: top,
      },
    ],
    {
      duration: 200,
      iterations: 1,
    }
  );
}

function logs() {
  let log = document.getElementById("log");
  if (count === 0) {
    log.src = "/benny-log-1.png";
  } else if (count === 1) {
    log.src = "/benny-log-3.png";
  } else if (count === 2) {
    log.src = "/benny-log-4.png";
  } else if (count === 3) {
    log.src = "/benny-log-2.png";
  }

  count += 1;

  if (count === n) {
    count = 0;
  }
}
