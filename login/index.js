var express = require("express");
var app = express();


app.use(express.static("public"));
app.set("view engine", "ejs");


app.listen(3000, function(req, res) {
	console.log("Listening on PORT 3000")
});

app.get("/", function(req, res) {
	res.render("profile");
});
