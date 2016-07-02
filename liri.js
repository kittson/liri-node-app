//homework assignment liri-siri, week 10 - homework 8
//Booth Kittson
var usageMsg = 'Sorry, did not understand your input. Try again!\n' +
 'Usage: node liri.js [my-tweets | spotify-this songName | movie-this movieName| do-what] \n';

var keys = require('./keys.js');
var twit = require('twitter');
var request = require('request');
var SpotifyWebApi = require('spotify-web-api-node');
var fs = require('fs');

var spotifyApi = new SpotifyWebApi({
  clientId : keys.spotifyInfo.clientId,
  clientSecret : keys.spotifyInfo.clientSecret,
  redirectUri : 'http://www.example.com/callback'
});

//gets the twitter api key information from keys.js
var client = new twit({
  consumer_secret: keys.twitterKeys.consumer_secret,
  consumer_key: keys.twitterKeys.consumer_key,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

var params = keys.twitterKeys.userParams; //twitter username

var argToDo = process.argv[2];
var stringToDo = process.argv[3];
doIt(argToDo, stringToDo);

function doIt( someArgCommand, stringStuff){
	switch (someArgCommand) {
		case 'my-tweets': 
			client.get('statuses/user_timeline', params, function(error, tweets, response){
				if (!error) {
					for (var t=0; t<tweets.length; t++){
					console.log(tweets[t].text);					
					}
					if ( tweets.length < 20 ){
						console.log("Gee, sorry, less than 20 tweets.")
					}
				}
			});           		
		break;

		case 'spotify-this': 	
			spotifyApi.searchTracks('track:' + stringStuff)
				.then(function(data) {
				console.log('Artist Name: ', data.body.tracks.items[0].artists[0].name);
				console.log('Song Name: ', data.body.tracks.items[0].name);
				console.log('Album Name: ', data.body.tracks.items[0].album.name);
				console.log('Song URL: ', data.body.tracks.items[0].album.external_urls.spotify);				
				//console.log('Song URL: ', data.body.tracks.items[0].album.preview_url);
				//console.log('Link to Song: ', data.body.tracks.name);
				//console.log('data: ', data.body.tracks);
			}, function(err) {
				console.error(usageMsg);
			});
			
		break;

		case 'movie-this': 
			request('http://www.omdbapi.com?t=' + stringStuff, function (error, response, body) {
				if (!error && response.statusCode == 200) {					
					var movieData = JSON.parse(body);
					console.log(movieData); 
				}
			})
		break;

		case 'do-what': 			
			fs.readFile("random.txt", "utf8", function(error, data) {		
			console.log(data);
			var newArguments = data.split(",");
			doIt(newArguments[0], newArguments[1]);
			});
		break;	

		default:
		console.log(usageMsg); 
	};//switch
};//function doIt