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


//connection.connect();


app.get('/weather_report', function (req, res, next) {
    connection.query('SELECT * FROM weeklyreport', function (error, results, fields) {
        if (error) throw error;
        console.log( "results :"+results);
        res.json(results)
      });
  
})
 
 
app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})
//http://localhost:8080/weather_report