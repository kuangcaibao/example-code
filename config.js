module.exports = {

	description: "test app",
	
	// 监听端口
	port: 3000,

	// redis
	redis: {
		host: "192.168.0.53",
		port: 6379,
		ttl: 30 * 60
	},

	mongdb: {
		host: "192.168.0.53",
		port: 27017,
		db: "test"
	},

	// session
	session: {
		secret: "hello world"
	}
}