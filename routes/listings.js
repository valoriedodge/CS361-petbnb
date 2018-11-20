var express    = require("express"),
    router     = express.Router();
// SHOW ALL LISTINGS
router.get("/", function(req, res){

});
// CREATE - add new listing to database
router.post("/", function(req, res){

});
// NEW - Show form to create new listing
router.get("/new", function(req, res){

});
// SHOW - Show more info about one listing
router.get("/:id", function(req, res){

});
// EDIT listing
router.get("/:id/edit", function(req, res){

});
// UPDATE listing
router.put("/:id", function(req, res){

});
// DELETE listing
router.delete("/:id", function(req, res){

});
module.exports = router;
