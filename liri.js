


var keys = require('./keys.js');
var twitter = require('twitter');
var request = require('request');
var spotify = require('spotify');

var express = require('express');
var appTest = express();

appTest.get('/',function (req, res) {
	res.send('Hellow Weorls!');
});

appTest.listen(3000, function() {
	console.log('Eampale app listening on port 3000');
});

var twit = new twit({
  "consumer_secret": twitterKeys.consumer_secret,
  "consumer_key": twitterKeys.consumer_key,
  "access_token": twitterKeys.access_token,
  "access_token_secret": twitterKeys.access_token_secret
});

var stream = twit.stream("user", { screen_name: "gazorna"});
// var queryTwitURL = "https://api.twitter.com/1.1/search/tweets.json";
// $.ajax({url: queryTwitURL, method: 'GET'}).done(function(response) {
// 	var twitResults = response;
// });

