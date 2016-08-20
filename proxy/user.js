var { User } = require("../models");

exports.getUserByNameAndPwd = function(name, pwd, callback) {

	// var user = new User({name: name, pwd: pwd});
	// user.find(callback);

	User.find({name: name, pwd: pwd}, callback);
}