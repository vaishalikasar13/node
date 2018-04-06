
var express=require('express');
 var path=require('path');
 var bodyparser=require('body-parser');
var mongo= require('mongodb');
var monk= require('monk');
var cors= require('cors');
var db=monk('127.0.0.1:27017/users');
// var mysql=require("mysql");
// var connect=mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'',
// 	database:'node_crud'
// });



var app=express();
// const route = require('./routes/route-mysql');
const route = require('./routes/route');


app.use(bodyparser.urlencoded({extended:false}));

// console.log(app);

db.then(() => {
  console.log('Connected correctly to server')
})

// ADDING MIDDLEWARE
// cors
app.use(cors());
//routes
// body - parser
app.use(bodyparser.json());
app.use(function(req,res,next){
	req.db = db;
	next();
});

// app.use(function(req,res,next){
// 	req.connect = connect;
// 	next();
// });


app.use('/api',route);

app.get("/",function(req,res){
	res.send('HELLO');

});
app.listen(4000);