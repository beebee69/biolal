@@ -3,4 +3,6 @@ var http = require('http');
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
	file.serve(req, res);
 No newline at end of file
}).listen(2013);

console.log('Application running on port 2013');
 No newline at end of file
