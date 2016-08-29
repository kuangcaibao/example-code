import tdxFetch from "../common/req";

var User = JSON.parse(localStorage.getItem("User"));
if(User === null) {
	User = {};
	User.isLogin = false;
} else {
	User.isLogin = true;
}

// 取服务器获取用户信息
var getInfoFromServer = function() {
	tdxFetch("/api/touch")
	.then( response => response.json())
	.then( res => {
		if(res.ErrorCode == -1) {
			User.isLogin = false;
		} else {
			Object.assign(User, {isLogin: true}, res.rows[0]);
		}
	})
	.catch( err => {
		// debugger;
		User.isLogin = false;
	});
}

// 判断用户是否登录
var getLoginStatus = function() {
	return User.isLogin;
} 

var setLoginStatus = function(status) {
	User.isLogin = status;
}

var getUserInfo = function() {
	return User;
}

getInfoFromServer();

export default {
	getLoginStatus,
	setLoginStatus,
	getUserInfo
}