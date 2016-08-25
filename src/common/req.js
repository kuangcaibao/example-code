require("es6-promise").polyfill();
require("isomorphic-fetch");

import config from "./config"

var tdxFetch = (url, sets) => {

	// console.log(Object.assign({}, config.fetch, sets));

	// return new Promise( function(resolve, reject) {
	// 	fetch(`${config.protocol}://${config.host}:${config.port}${url}`, Object.assign({}, config.fetch, sets))
	// 	.then(resolve)
	// 	.catch(reject)
	// });

	return fetch(`${config.protocol}://${config.host}:${config.port}${url}`, Object.assign({}, config.fetch, sets));

}

module.exports = tdxFetch;