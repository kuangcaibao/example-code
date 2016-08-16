var express = require("express");
var router = express.Router();

// 中间件
var { auth } = require("../middleware");

// controller
var sign = require("../controller/sign");

router.get("/login", sign.showLogin);

router.post("/login", sign.login);

module.exports = router;