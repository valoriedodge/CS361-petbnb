
module.exports = function(){
    var express = require('express');
    var router = express.Router();
    var Handlebars = require('handlebars');

    router.get('/', function(req, res){
        res.render('accounts');
    });


    router.post('/', function(req, res){
        console.log(req.body)
        var mysql = req.app.get('mysql');
        var sql = "SELECT user_name FROM Accounts WHERE user_pw = ?";
        var inserts = [req.body.password];        
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
            }else{
                console.log(results[0])
                if (results[0] != undefined) {
                    res.redirect('/search');
                }
                else {
                    res.redirect('/accounts');
                }
            }
        });
    });


    return router;

}();