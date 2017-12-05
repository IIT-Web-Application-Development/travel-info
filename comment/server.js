const express = require('express'),
	  http = require('http'),
	  bodyParser = require('body-parser'),
	  app = express();
    router = express.Router();
    path = require("path");

app.use(bodyParser.json());
app.use(express.static('public'));

const users = [ ];
//Set index.html default page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')))

//1. GET /users/{userId}
app.get('/users/:userId', function(req, res){  
	var userID = req.params.userId;

	if(!users[userID - 1]) {
		res.status(404).send("Not found.");
	} else {
        res.status(200).send(users[userID-1].user);
	}
});

//2. POST /users
app.post('/users', function (req, res) {
  var newUserId = users.length + 1;
  var newUser = req.body; 
  newUser.reminders = [ ];
  newUser['userId'] = newUserId;
  console.log(newUser)
  users.push(newUser);
  res.status(200).send(newUser);
});


//set app to run on port 3000
app.listen(3000, function () {
  console.log('The reminder RESTful app is listening on port 3000');
});
