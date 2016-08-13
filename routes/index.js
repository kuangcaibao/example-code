var express = require("express");
var path = require("path");
var router = express.Router();

// router.get("/", function(req, res) {
// 	if(!req.session.times) {
// 		req.session.times = 0;
// 	}

// 	req.session.times ++;
// 	res.send("visited " + req.session.times + " times.");
// })

router.get("/", function(req, res) {
	res.render("index", { title: "kuangcaibao"});
})

module.exports = router;