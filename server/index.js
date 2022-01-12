const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


var mysql = require('mysql');

var con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'My1252895',
    database: 'aircooltech',
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req, res) =>{

  const invoiceNumber = req.body.invoiceNumber
  const customerName = req.body.customerName
  const date = req.body.date
  const total = req.body.total


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sqlInsert = "INSERT INTO invoice_n (invoice_number, customer_name, invoice_date, total, payment_type) VALUES (?, ?, ?, ?, 'cash');";
  con.query(sqlInsert,[invoiceNumber, customerName, date, total, ], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

})

//insert record to RETJ

app.post("/api/insertretj", (req, res) =>{

  const invoiceNumber = req.body.invoiceNumber
  const date = req.body.date
  const total = req.body.total


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sqlInsert = "INSERT INTO invoice_r (invoice_number, invoice_date, total, payment_type) VALUES (?, ?, ?, 'cash');";
  con.query(sqlInsert,[invoiceNumber, date, total, ], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

})





app.listen(3001, ()=>{
  console.log("running on port 3001")
});







