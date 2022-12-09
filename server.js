var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var postData = require('./postData.json');
var leaderBoardData = require('./leaderBoardData.json');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.static('public'));

app.get('/', function(req, res) {
res.status(200).render('mainPage', {
        postData: postData
    })
})

app.get('/leaderboard', function(req, res) {
    res.status(200).render('leaderBoardPage', {
        leaderBoardData: leaderBoardData
    })
})

app.get('/getMinScore', function(req, res) {
	var c = leaderBoardData.length;
	if (c > 0) {
		res.json({
			count: c,
			score: leaderBoardData[c - 1].score
		})
	} else {
		res.json({
			count: c
		})
	}
})

app.post('/addScore', function (req, res, next) {
	leaderBoardData.push({
		name:req.body.name,
		score:req.body.score,
		date:req.body.date
	})

	leaderBoardData.sort((a, b) => b.score - a.score);
	leaderBoardData = leaderBoardData.slice(0, 10);
	
	fs.writeFile('./leaderBoardData.json',
		 JSON.stringify(leaderBoardData, null, 2),
		 function (err) {
			if (err) {
				res.status(500).send("Failed to upload score.");
			} else {
				res.status(200).send("Score successfully uploaded.");
			}
		}
	 )
});

app.get('*', function (req, res) {
    res.status(404).render('404');
});

app.listen(port, function (err) {
    if(err) throw err;
    console.log('== Server is listening on port', port);
});
