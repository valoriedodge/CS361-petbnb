
module.exports = function(){
    var express = require('express');
    var router = express.Router();
    var Handlebars = require('handlebars');

    router.get('/', function(req, res){
        res.render('register');
    });


    router.post('/', function(req, res){
        console.log(req.body)
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO `Accounts` (user_name, user_address, phone_number, user_email, user_pw, acc_type) VALUES (?, ?, ?, ?, ?, ?)";
        var inserts = [req.body.username, req.body.address, req.body.number, req.body.email, req.body.password, req.body.acc_type];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/accounts');
            }
        });
    });

    return router;

}();