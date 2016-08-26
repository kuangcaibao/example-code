import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router"

import "./css";

import Routes from "./route";

console.log(Routes);

render(
	<Router history={browserHistory} routes={Routes} />,
	document.getElementById("app")
);