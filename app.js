var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'weather_report_db'
});
/*
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    var sql = "DELETE FROM weeklyreport ORDER BY day LIMIT 2";
 // var sql = "INSERT INTO `weeklyreport`(`day`, `weather`, `Air_humidity`, `C_of_rain`, `Wind`) VALUES ('1','2','3','4','5')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
*/
//connection.connect();
/*
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
   // var sql = "DELETE FROM weeklyreport ORDER BY day LIMIT 2";
  var sql = "INSERT INTO `weeklyreport`(`day`, `weather`, `Air_humidity`, `C_of_rain`, `Wind`) VALUES ('1','2','3','4','5')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
*/
app.get('/weather_report', function (req, res, next) {
    connection.query('SELECT * FROM Weather', function (error, results, fields) {
        if (error) throw error;
        console.log( "results :"+results);
        res.json(results)
      });
  
})
 
 
app.listen(8888, function () {
  console.log('CORS-enabled web server listening on port 8888')
})
//http://localhost:8888/weather_report
//node app.js