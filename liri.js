// https://apps.twitter.com/app/12520381  twitter app key
// Consumer Key (API Key)	nuR8dK5LN0sMIoF3GRu91Of2Z
// Consumer Secret (API Secret)	MylhSSmbn0UEDNWn9VOF2LzLrYiOaphGsUa6rrj0tQ4m7nzFAw
// Owner ID	1033799005
// used http://expressjs.com/en/starter/hello-world.html


var express = require('express');
var appTest = express();

appTest.get('/',function (req, res) {
	res.send('Hellow Weorls!');
});

appTest.listen(3000, function() {
	console.log('Eampale app listening on port 3000');
});