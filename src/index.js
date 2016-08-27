import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";

// 引入公共操作
import "./common/req";
import "./controller/auth";

import "./css";
import Routes from "./route";

render(
	<Router history={browserHistory} routes={Routes} />,
	document.getElementById("app")
);