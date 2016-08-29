require("es6-promise").polyfill();
require("isomorphic-fetch");

import config from "./config"

var tdxFetch = (url, sets) => {

	if(sets && sets.method && sets.method.toLowerCase() == "post") {

		// 这里设置请求头
		var headers = new Headers();
		// headers.append("Content-Type", "application/x-www-form-urlencoded");
		headers.append("Content-Type", "application/json");
		sets.headers = headers;
	}

	return fetch(`${config.protocol}://${config.host}:${config.port}${url}`, Object.assign({}, config.fetch, sets));

}

module.exports = tdxFetch;