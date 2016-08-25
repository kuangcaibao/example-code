import tdxFetch from "./common/req";

import "./test.css"

// tdxFetch("/api/list", {
// 	method: "post"
// }).then(response => response.json())
// 	.then( response => console.log(response) )

fetch("http://127.0.0.1:3000/api/list", { method: "post", mode: "no-cors"})
.then( response => response.json())
.then( list => console.log(list))
.catch( err => console.log(err));