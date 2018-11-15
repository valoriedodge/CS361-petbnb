module.exports = function(){
    var express = require('express');
    var router = express.Router();
    var Handlebars = require('handlebars');

    router.get('/', function(req, res){
        res.render('search');
    });


    router.post('/', function(req, res){
        console.log(req.body)
        var mysql = req.app.get('mysql');
        
        //need DML for listings * space holder for now
        var sql = "SELECT * FROM  WHERE * = ?";
        var inserts = [req.body.start, req.body.end, req.body.animal_type, req.body.amount];        
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
            }else{
                console.log(results[0])
                if (results[0] != undefined) {
                    res.redirect('/listings');
                }
                else {
                    res.redirect('/search');
                }
            }
        });
    });


    return router;

}();
