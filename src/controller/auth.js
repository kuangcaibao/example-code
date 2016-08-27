import tdxFetch from "../common/req";


// 这里负责用户的校验，注册
var User = {
	isLogin: false
};

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

getInfoFromServer();

export default {
	getLoginStatus,
	setLoginStatus
}