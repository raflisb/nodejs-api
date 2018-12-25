// create object 
const express =require('express'); 

const config = require ('../config.js'); 
const router = express.Router(); 
const connection = config.getConnection();

var PenggunaController = {} ; 



PenggunaController.index = function (req, res) { 

    query = "select * from pengguna " ;
    connection.query(query,(err,rows,field) => 
    { 
        //checking query   
        if (err) 
        {
            console.log("Failed to get data :" + err);
            res.sendStatus(500); 
            return 
        }
        else 
        {
            res.json(rows); 
        }
    }); 
}; 

PenggunaController.show = function (req, res){

    console.log ("fetching data pengguna dengan id " + req.params.id ); 
    
    
    const userId = req.params.id; 
    query = "select * from pengguna where id = ?"; 
    connection.query(query, [userId], (err, rows, field)=> 
    {
        // check if  query error 
        if (err){
            console.log("Failed to query form users : " + err )
            res.sendStatus(500); 
           return
        }
        // end if 

        console.log ('trying to fetch data'); 
        res.json(rows);
    }); 
};

PenggunaController.create = function (req, res)
{
    nama_depan = req.body.nama_depan; 
    nama_belakang = req.body.nama_belakang; 
    query = "insert into pengguna (nama_dpn, nama_blkng) values (?, ?) "; 

    connection.query(query, [nama_depan, nama_belakang], (err, results, fields)=> 
    {
        if (err){
            console.log("gagal membuat pengguna baru "); 
           res.sendStatus(500);
        }
        else { 
            console.log ("berhasil membuat pengguna"); 
        res.end(); 
        }
        
    });
}

PenggunaController.update = function (req, res)
{ 
    id = req.params.id
    post =  { 
        nama_dpn : req.body.nama_depan, 
        nama_blkng : req.body.nama_belakang, 
    }; 
    query = "update pengguna set ? where id = ?"; 

    connection.query(query, [post, id], (err, results, fields)=> 
    {
        if (err){
            console.log("gagal melakukan uodate pengguna  " + err); 
           res.sendStatus(500);
        }
        else { 
            console.log ("berhasil update pengguna"); 

        res.sendStatus(200); 
        }
        
    });
}

PenggunaController.delete = function (req, res) { 

    query = "select * from pengguna " ;
    connection.query(query,(err,rows,field) => 
    { 
        //checking query   
        if (err) 
        {
            console.log("Failed to get data :" + err);
            res.sendStatus(500); 
            return 
        }
        else 
        {
            res.json(rows); 
        }
    }); 
};

module.exports = PenggunaController ;