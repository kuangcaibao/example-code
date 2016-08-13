var midSession = function(req, res, next) {

	if(!req.session) {
		return next(new Error('no session'));
	}

	// console.log(req.session);
	res.locals.current_user = null;
	// res.locals.current_user = {
	// 	name: "kuangcaibao"
	// }

	next();
}

module.exports = midSession;