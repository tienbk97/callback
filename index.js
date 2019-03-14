require('dotenv').config();

var express = require('express'),
  	path = require('path'),
  	bodyParser = require('body-parser'),
  	request = require('request')
 
app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3335;
//set the port
app.set('port', port);

//tell express that we want to use the www folder
//for our static assets
app.use(express.static(path.join(__dirname, '/public')));

//CONSTANT
const client_id = "1000.THA4BOAZMWUN48434XLJTYE8SCUMH6"
const client_secret = "4b4115ac65ce49e949893e310387c77e6a5021ce34"
const redirect_uri = "https://zoho-vcs.herokuapp.com"

app.post('/api/code', (req, res) => {
	const {code} = req.body
	request.post({
		url : `https://accounts.zoho.com/oauth/v2/token?code=${code}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=authorization_code`
	}, (err, resp, body) => {
		console.log(body)
	})
	
});

// Listen for requests
var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});
