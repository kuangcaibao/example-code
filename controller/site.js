exports.index = function(req, res) {
	
	var name = req.session.name;
	res.send("hello " + name);
}