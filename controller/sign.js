var eventproxy = require("eventproxy");
var User = require("../proxy/user");

exports.showLogin = function(req, res) {
	res.render("sign/login", { title: "登录" } );
}

exports.login = function(req, res, next) {

	// debugger;
	var name = req.body.name.toLowerCase();
	var pwd = req.body.pwd;
	var ep = new eventproxy();	

	ep.fail(next);

	ep.on("login_error", function() {
		res.status(403);
		res.render("sign/login", { error: "用户名或者密码错误", title: "登录" });
	})

	User.getUserByNameAndPwd(name, pwd, function(err, doc) {
		if(err) {
			return next(err);
		}

		console.log(doc)

		if(!doc || doc.length == 0) {
			return ep.emit("login_error");
		}
	})
}