const express = require('express'); 
const mysql = require('mysql'); 

var config = {
    getConnection : function() {
    return mysql.createConnection({ 
        host: 'localhost', 
        user: 'root',
        password: 'root', 
        database:'Rest', 
    }); 
    },
} 

module.exports= config;