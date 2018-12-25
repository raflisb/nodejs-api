const express = require('express'); 
const mysql = require('mysql'); 
const config = require ('../config.js'); 
const router = express.Router(); 
const connection = config.getConnection();
const bodyParser = require ('body-parser'); 
const penggunaController = require ('../controller/PenggunaController.js');

//using bodyParser
router.use(bodyParser.urlencoded(
    {
        extended:false
    }
)); 


// selecting data with parameter 

router.get("/pengguna/", penggunaController.index); // index
router.get("/pengguna/:id", penggunaController.show);  // show
router.post('/pengguna/buat_pengguna', penggunaController.create); // create
router.post('/pengguna/edit_pengguna/:id', penggunaController.update); // update 
router.get('/pengguna/hapus/:id', penggunaController.delete); // delete 









module.exports = router ;


