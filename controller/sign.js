exports.showLogin = function(req, res) {
	res.render("sign/login", { title: "登录" } );
}

exports.login = function(req, res, next) {

	// debugger;
	var name = req.body.name.toLowerCase();
	var pwd = req.body.pwd;

	// res.json(req.body);

}