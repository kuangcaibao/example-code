module.exports = function(req, res, next) {

	if(!req.session) {
		res.redirect("/nomatch");
	}

	res.locals.user = null;

	// 用户未登录
	if(!req.session.user) {
		// console.log("1");
		res.redirect("/login");
	}

	next();
}