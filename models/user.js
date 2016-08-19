var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	name: String,
	pwd: String
});

mongoose.model("User", userSchema);