var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password@123',
	database: 'articles'
});

connection.connect();

var article = {
	author: 'S Ramanujan',
	title: 'Mathematician',
	body: 'foo bar'
};

var query = connection.query('insert into articles set ?', article, function(err, result) {
	if(err) {
		console.error(err);
		return;
	}
	console.error(result);
	console.log(query.sql);
});