var express        = require("express"),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    handlebars     = require('express-handlebars').create({defaultLayout:'main'}),
    mysql          = require('./dbcon.js'),
    app            = express();

var PORT = 5002;

// requiring routes
var indexRoutes   = require("./routes/index"),
    listingRoutes  = require("./routes/listings"),
    petRoutes   = require("./routes/pets");

app.engine('handlebars', handlebars.engine); 
app.set('view engine', 'handlebars');
app.set('mysql', mysql);
app.use(bodyParser.urlencoded({extended: true}));

app.use('/static', express.static('public')); // static directory is going to be our directory called public

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(methodOverride("_method")); // _method is what we are telling it to look for


// w/e function we provide to it will be called on every route
app.use(function(req, res, next){
    // w/e we put in res.locals is what's available inside of our template
    res.locals.currentUser = req.user;
    next();
});
// Shortens the route declarations
app.use("/", indexRoutes); // landing page, login page, register page, search page, accounts page.
app.use("/listings", listingRoutes);
app.use("/pets", petRoutes);

app.listen(PORT, process.env.IP, function(){
    console.log("server started on port ", PORT);
});
