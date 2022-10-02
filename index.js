var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

const admin = require('./admin.js');

app.use(express.static('public'));
app.use(cors());

async function verifyToken(req, res, next) {
	const token = req.headers.authorization;

	if (token) {
		admin.auth().verifyIdToken(token)
			.then(decodedToken =>{
				console.log("Decoded Token ", decodedToken);
				return next();
			}).catch(err => {
				return res.status(401).send('Unauthorized');
			})
	}
	else {
		return res.send(401).send('no token brah');
	}
}

app.get('/account/create/:name/:email/:password', function (req, res){
	dal.create(req.params.name, req.params.email, req.params.password).
		then((user) => {
			console.log(user);
			res.send(user);
		});
	});



app.get('/account/all', function (req,res){
	dal.all().
		then((docs) => {
			console.log(docs);
			res.send(docs);
		});
});

app.get('/account/lookup/:email', function (req, res){
	dal.findOne(req.params.email).
		then((user) => {
			console.log(user);
			res.send(user);
		});
	});

	//update balance - use for deposits, withdrawals, and transfers
app.get('/account/update/:email/:amount', function (req, res) {

    var amount = Number(req.params.amount);

    dal.update(req.params.email, amount).
        then((response) => {
            console.log(response);
            res.send(response);
    });    
});

	//update theme
app.get('/account/updateTheme/:email/:newTheme', function (req, res) {

    var newTheme = String(req.params.newTheme);

    dal.updateTheme(req.params.email, newTheme).
        then((response) => {
            console.log(response);
            res.send(response);
    });    
});



var port = 3000;
app.listen(port);
console.log('Running on port:' + port);