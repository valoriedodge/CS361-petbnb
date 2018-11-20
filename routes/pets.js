var express    = require("express"),
    router     = express.Router();
// SHOW ALL PETS - assocaited with the user
router.get("/", function(req, res){
	var context = {};
	var mysql = req.app.get('mysql');
	getPets(res, mysql, context, complete);
	function complete(){
		res.render('pets/index', context);
	}
});
// CREATE - add new pet to database
router.post("/", function(req, res){
    var mysql = req.app.get('mysql');
    var sql = "INSERT INTO Pets (pet_name, pet_type, pet_breed, pet_weight, pet_picture, pet_diet, medications, special_needs) VALUES (?,?,?,?,?,?,?,?)";
    var inserts = [req.body.pet_name, req.body.pet_type, req.body.pet_breed, req.body.pet_weight, req.body.pet_picture, req.body.pet_diet, req.body.medications, req.body.special_needs];
    sql = mysql.pool.query(sql, inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            res.redirect('/pets');
        }
    });
});
// NEW - Show form to create new pet
router.get("/new", function(req, res){
    res.render('pets/new');
});
// SHOW - Show more info about one pet
router.get("/:id", function(req, res){
    var context = {};
    var mysql = req.app.get('mysql');
    getPet(res, mysql, context, req.params.id, complete);
    function complete(){
        res.render('pets/show', context);
    }
});
// EDIT pet
router.get("/:id/edit", function(req, res){
    var context = {};
    var mysql = req.app.get('mysql');
    getPet(res, mysql, context, req.params.id, complete);
    function complete(){
        res.render('pets/edit', context);
    }
});
// UPDATE pet
router.put("/:id", function(req, res){
    var mysql = req.app.get('mysql');
    var sql = "UPDATE Pets SET pet_name=?, pet_type=?, pet_breed=?, pet_weight=?, pet_picture=?, pet_diet=?, medications=?, special_needs=? WHERE pet_id=?"; 
    var inserts = [req.body.pet_name, req.body.pet_type, req.body.pet_breed, req.body.pet_weight, req.body.pet_picture, req.body.pet_diet, req.body.medications, req.body.special_needs, req.params.id];
     sql = mysql.pool.query(sql,inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            res.redirect('/pets');
        }
    });
});
// DELETE pet
router.delete("/:id", function(req, res){
    var mysql = req.app.get('mysql');
    var sql = "DELETE FROM Pets WHERE pet_id = ?";
        // remember that these inserts are URL encoded
    var inserts = [req.params.id];
    sql = mysql.pool.query(sql,inserts,function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }else{
            res.status(200);
            res.redirect('/pets');
            res.end();
        }
    });
});
module.exports = router;

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
function getPet(res, mysql, context, id, complete){
    var sql = "SELECT * FROM Pets WHERE pet_id = ?";
    var inserts = [id];
    mysql.pool.query(sql, inserts, function(error, results, fields){
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        context.pet = results[0];
        complete();
    });
}