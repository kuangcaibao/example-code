module.exports = {
	
	// 监听端口
	port: 3000,

	// redis
	redis: {
		port: 6379,
		host: "192.168.0.53",
		db: "test",
		pass: "123456"
	},

	// session
	session: {
		secret: "hello world"
	}
}