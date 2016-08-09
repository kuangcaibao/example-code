var midSession = function(req, res, next) {

	if(!req.session) {
		return next(new Error('no session'));
	}

	next();
}

module.exports = midSession;