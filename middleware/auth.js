module.exports = function(req, res, next) {

	if(!req.session) {
		res.redirect("/nomatch");
	}

	// 用户未登录
	if(!req.session.user) {
		// console.log("1");
		res.redirect("/login");
	}

	next();
}