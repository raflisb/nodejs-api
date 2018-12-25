// declare and call express library 

const express = require('express'); 
const app = express(); 
const morgan = require('morgan'); 
const bodyParser = require('body-parser'); 
const routes = require('./routes/api.js'); 


// use pengguna 
app.use(routes);
// using bodyParser to get data form 
app.use (bodyParser.urlencoded({extended: false })); 

// using morgan 
// HTTP request logger middleware for node.js
app.use(morgan('short')); 

// make a static public 
app.use(express.static('./public')); 

//starting server on 3000
app.listen(3003, ()=> { 
    console.log("server is up on port 3003")
});





    
    
    