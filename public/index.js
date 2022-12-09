var wood = 0 // User wood total
var wpc = 1 // Wood per click
var wps = 0 // Wood per second
const fps = 30 // FPS

// Generalized function for pruchases
function purchase(vname, name, price, count, wpcs, wpss) {
	if (wood >= price) {
		wpc += wpcs
		wps += wpss
		wood -= price
		price = Math.round(price * 1.25)
		count += 1
		document.getElementById(vname + 'Title').textContent = "Buy " + name + " - " + price
		document.getElementById(vname + 'Counter').textContent = name + "s: " + count
	} else {
		alert("You need " + price + " wood to purchase this item.")
	}
}

function endGame() {
	fetch('/getMinScore')
	.then(response => response.json())
	.then(json => {
		var name = ""
		if ((json.count < 10 || wood > json.score) && (name = prompt("Congratulations, you've scored in the top 10! Please enter your name to be added to the leaderboard:"))) {
			fetch('/addScore', {
				method: 'POST',
				body: JSON.stringify({
					name: name,
					score: wood,
					date: new Date(Date.now()).toLocaleDateString()
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
		}
	}).then(function(res) {
		window.location = '/leaderboard';
	});
}

// Event listeners for purchases
axe.addEventListener('click', () => purchase('axe', 'Axe', '25', 0, 1, 0));
autoAxe.addEventListener('click', () => purchase('autoAxe', 'Auto Axe', '50', 0, 0, 1));
chainsaw.addEventListener('click', () => purchase('chainsaw', 'Chainsaw', '75', 0, 3, 0));
autoChainsaw.addEventListener('click', () => purchase('autoChainsaw', 'Auto Chainsaw', '150', 0, 0, 3));
flameThrower.addEventListener('click', () => purchase('flameThrower', 'Flame Thrower', '125', 0, 5, 0));
autoFlameThrower.addEventListener('click', () => purchase('autoFlameThrower', 'Auto Flame Thrower', '375', 0, 0, 5));

storePosts = document.getElementById('store')


var alreadyWon = false

storePosts.addEventListener('click', function(event) {
	if(event.target.parentNode.classList.contains("post") && !event.target.parentNode.classList.contains("bought")) {
		var post = event.target.parentNode
		var price = post.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent
		price = price.substr(1, price.length)
		priceNum = Number(price)
		if(wood >= priceNum) {
			wood -= priceNum
			post.classList.add("bought")
		} else {
			alert("You need " + priceNum + " wood to purchase this item.")
		}
	}
	else if (event.target.parentNode.parentNode.classList.contains("post") && !event.target.parentNode.parentNode.classList.contains("bought")) {
		var post = event.target.parentNode.parentNode
		var price = post.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent
		price = price.substr(1, price.length)
		priceNum = Number(price)
		if(wood >= priceNum) {
			wood -= priceNum
			post.classList.add("bought")
		} else {
			alert("You need " + priceNum + " wood to purchase this item.")
		}
	}
	else if (event.target.parentNode.parentNode.parentNode.classList.contains("post") && !event.target.parentNode.parentNode.parentNode.classList.contains("bought")) {
		var post = event.target.parentNode.parentNode.parentNode
		var price = post.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent
		price = price.substr(1, price.length)
		priceNum = Number(price)
		if(wood >= priceNum) {
			wood -= priceNum
			post.classList.add("bought")
		} else {
			alert("You need " + priceNum + " wood to purchase this item.")
		}
	}

	
	var boughtItems = 0
	var postIndex = 0
	var postList = document.getElementsByClassName("post")
	
	while(postIndex < postList.length) {
		if(postList[postIndex].classList.contains("bought")) {
			boughtItems++
		}
		postIndex++
	}

	postIndex = 0

	if(boughtItems === (postList.length) && !alreadyWon) {
		alert("Congrats! You have bought Benny's entire List!!! You win!!!!")
		alreadyWon = true
	}
})


// Normal click
woodButton.addEventListener('click', function() {
	wood += wpc
});

// Warn when selecting leaderboard
leaderboard.onclick = function() {
	if (wood != 0) {
		if (confirm("Wait! Leaving this page will end the game! Are you sure?")) {
			endGame();
		}
		return false;
	}
};

setInterval(function() {
    wood += wps/fps;
	woodTitle.textContent = "Wood Count: " + Math.round(wood);
	woodPer.textContent = "Wood Per Sec: " + Math.round(wps);
}, 1000/fps);
