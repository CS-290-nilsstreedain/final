var express = require('express');
var exphbs = require('express-handlebars');

var postData = require("./postData.json");

var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", exphbs.engine({
    defaultLayout: "main"
}));


app.set("view engine", "handlebars");

app.use(express.static('public'));

app.get("/", function(req, res) {
res.status(200).render("mainPage", {
    postData: postData
})
})

app.get('*', function (req, res) {
    res.status(404).render("404");
});

app.listen(port, function (err) {
    if(err) throw err;
    console.log("== Server is listening on port", port);
});