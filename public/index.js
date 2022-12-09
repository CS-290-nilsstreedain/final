var wood = 0;	// User wood total
var wpc = 1;	// Wood per click
var wps = 0;	// Wood per second
const fps = 30;	// FPS

function Tool(vname, name, price, count, wpcs, wpss) {
	this.vname = vname;
	this.name = name;
	this.price = price;
	this.count = count;
	this.wpcs = wpcs;
	this.wpss = wpss;
}

function purchase(tool) {
	if (wood >= tool.price) {
		wpc += tool.wpcs;
		wps += tool.wpss;
		wood -= tool.price;
		tool.price = Math.round(tool.price * 1.25);
		tool.count++;
		document.getElementById(tool.vname + 'Title').textContent = `Buy ${tool.name} - ${tool.price}`;
		document.getElementById(tool.vname + 'Counter').textContent = `${tool.name}s: ${tool.count}`;
	} else {
		alert(`You need ${tool.price} wood to purchase this item.`);
	}
}

function endGame() {
	fetch('/getMinScore')
	.then(response => response.json())
	.then(json => {
		var name = ''
		if ((json.count < 10 || wood > json.score) && (name = prompt('Congratulations, you\'ve scored in the top 10! Please enter your name to be added to the leaderboard:'))) {
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
			});
		}
	}).then(function(res) {
		window.location = '/leaderboard';
	});
}

// Array of Tool objects
var tools = [
	new Tool('axe', 'Axe', '25', 0, 1, 0),
	new Tool('autoAxe', 'Auto Axe', '50', 0, 0, 1),
	new Tool('chainsaw', 'Chainsaw', '75', 0, 3, 0),
	new Tool('autoChainsaw', 'Auto Chainsaw', '150', 0, 0, 3),
	new Tool('flameThrower', 'Flame Thrower', '125', 0, 5, 0),
	new Tool('autoFlameThrower', 'Auto Flame Thrower', '375', 0, 0, 5)
];

// Event listeners for purchases
axe.addEventListener('click', () => purchase(tools[0]));
autoAxe.addEventListener('click', () => purchase(tools[1]));
chainsaw.addEventListener('click', () => purchase(tools[2]));
autoChainsaw.addEventListener('click', () => purchase(tools[3]));
flameThrower.addEventListener('click', () => purchase(tools[4]));
autoFlameThrower.addEventListener('click', () => purchase(tools[5]));

// Normal click
woodButton.addEventListener('click', function() {
	wood += wpc;
});

// Warn when selecting leaderboard
leaderboard.onclick = function() {
	if (wood != 0) {
		if (confirm('Wait! Leaving this page will end the game! Are you sure?')) {
			endGame();
		}
		return false;
	}
};

setInterval(function() {
    wood += wps/fps;
	woodTitle.textContent = `Wood Count: ${Math.round(wood)}`;
	woodPer.textContent = `Wood/Sec: ${Math.round(wps)}`;
}, 1000 / fps);
