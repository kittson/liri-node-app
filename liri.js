


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

// var queryTwitURL = "https://api.twitter.com/1.1/search/tweets.json";
// $.ajax({url: queryTwitURL, method: 'GET'}).done(function(response) {
// 	var twitResults = response;
// });

