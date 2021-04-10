var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'g84t6zfpijzwx08q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'kfady3g9acimp1zi',
	password: 'ilq5jabrjqiqxhwo',
	port: 3306,
	database: '	t0dtvf6n9xq0n3jn',
	insecureAuth: true
});

module.exports = {
	executeQuery: function (sql, sqlParam, callback) {
		if (sqlParam == null) {
			connection.query(sql, function (error, result) {
				if (error) {
					console.log(error);
				}
				callback(result);
			});
		}
		else {
			connection.query(sql, sqlParam, function (error, result) {
				if (error) {
					console.log(error);
				}
				callback(result);
			});
		}
	}
};
