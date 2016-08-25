var config = {

	protocol: "http",
	host: "127.0.0.1",
	port: 3000,

	fetch: {
		credentials: 'include',   	// 发送请求带cookie
		mode: 'no-cors'				// 跨域请求
	}
};

module.exports = config;