var mysql = require('mysql');
function test() {
console.log("Alert.....");
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password@123',
	database: 'articles',
	multipleStatements: true
});

connection.connect();

var query = connection.query('select * from articles', function(err, result) {
	if(err) {
		console.error(err);
		return;
	}
	console.error(result);
	//console.log(query.sql);
});

//var id = 2; drop table articles; //will delete table articles when multipleStatments: true
/*var id = 2;
var query = connection.query('select * from articles where id = ' + id, function(err, result) {
	if(err) {
		console.error(err);
		return;
	}
	console.error(result);
	//console.log(query.sql);
});*/
}