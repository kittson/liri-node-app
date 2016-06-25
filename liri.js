//homework assignment liri-siri, week 10
//Booth Kittson
var keys = require('./keys.js');
var twit = require('twitter');
var request = require('request');
var spotify = require('spotify');

//gets the twitter api key information from keys.js
var client = new twit({
  //"consumer_secret": keys.consumer_secret,  
  //"consumer_key": keys.consumer_key,
  //"access_token": keys.access_token,
  //"access_token_secret": keys.access_token_secret
  consumer_secret: keys.twitterKeys.consumer_secret,
  consumer_key: keys.twitterKeys.consumer_key,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

var params = {screen_name: 'gazorna'}; //twitter username

var argToDo = process.argv[2];

switch (argToDo) {
	case 'my-tweets': 
		client.get('statuses/user_timeline', params, function(error, tweets, response){
			if (!error) {
			console.log(tweets[0].text);
			}
		});           		
	break;

	case 'spotify-this': 
		spotify.lookup({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
			if ( err ) {
			  console.log('Error occurred: ' + err);
			  return;
			}
	 	console.log(data);
	    // Do something with 'data' 
	 	});
	break;

	case 'movie-this': 
	var myMovie = "Elf";
 	request('http://www.omdbapi.com?t=' + myMovie, function (error, response, body) {
	 	if (!error && response.statusCode == 200) {
	    	//console.log(body); // Show the HTML for the Google homepage.
			var movieData = JSON.parse(body);
			console.log(movieData); 
	 	}
	})
	break;

	case 'do-what': 
		results = firstNum/secondNum;
		console.log(results);
	break;	

	default:
	console.log("Sorry, didn't understand input. Try again!\n" +
	"Usage: node liri.js [my-tweets | spotify-this | movie-this | do-what] \n"); 
};//switch

/*var express = require('express');
var appTest = express();

appTest.get('/',function (req, res) {
	res.send('Hellow Weorls!');
});

appTest.listen(3000, function() {
	console.log('Eampale app listening on port 3000');
});*/