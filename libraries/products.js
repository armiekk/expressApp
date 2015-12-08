var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'armsozk38',
  database: 'stationary'
});

function initMySQL() {
  connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }

    console.log('Connect as id ' + connection.threadId);
  });
}

function getAll(callback){
  connection.query('SELECT * FROM product', function(error, results, fields){
    if(error){
      console.error("error query", error);
      callback(error);
    }
    callback(results);
  });
}

function closeMySQL(){
  connection.end();
}

module.exports = {
  initMySQL: initMySQL,
  getAll: getAll,
  closeMySQL: closeMySQL
};
