var express    = require("express"),
    router     = express.Router();


// root route
router.get("/", function(req, res){
    // The render command by default will look for files in a folder called views
    res.render("login");
});

// accounts route
router.get('/accounts', function(req, res){
    res.render('accounts');
});
router.post('/accounts', function(req, res){
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
// show login form
router.get("/login", function(req, res){
   res.render("login"); 
});

// show register form
router.get("/register", function(req, res){
   res.render("register"); 
});

// handle sign up logic
router.post("/register", function(req, res) {
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

// search routes
router.get('/search', function(req, res){
    res.render('search');
});

// handle search request
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
module.exports = router;