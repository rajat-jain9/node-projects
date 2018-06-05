var http = require('http');
var url = require('url');
var dt = require('./modules/myfirstmodule')

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	res.write("This is my text.");
	res.end('Hello! Rajat Jain. This is current Date:' +dt.myDate());
}).listen(8080);