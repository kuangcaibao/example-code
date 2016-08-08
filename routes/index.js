var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", function(req, res) {
	res.sendFile(path.resolve(__dirname, "../example/index.html"));
})

module.exports = router;