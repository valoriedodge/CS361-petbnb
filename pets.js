module.exports = function(){
    var express = require('express');
    var router = express.Router();
    var ejs = require('ejs');


// SHOW ALL PETS - assocaited with the user
router.get("/", function(req, res){
	var context = {};
  var mysql = req.app.get('mysql');
  getPets(res, mysql, context, complete);
  function complete(){
    req.app.set('view engine', 'ejs');
  	res.render('pets', context);
  }
});
function getPets(res, mysql, context, complete){
    var sql = "SELECT * FROM Pets";
    mysql.pool.query(sql, function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        context.Pets = results;
        complete();
    });
}



return router;

}();