import React from "react";
import { browserHistory, Router, Route } from "react-router";
import User from "./controller/auth";

import {

	App,
	Login,
	Signup

} from "./components"

const Routes = {
	path: "/",
	component: App,
	childRoutes: [
		{
			path: "login",
			component: Login
		},
		{
			path: "signup",
			component: Signup
		}
	],
	indexRoute: {
		component: Signup,
		onEnter: (nextState, replace) => {
			if(!User.getLoginStatus()) {
				return replace("/login");
			}
		}
	}
}

/*

	<Route path="/" component={App} onEnter=(...)>
		<Route path="/login" component={Login} />
		<Route path="/signup" component={Signup} />
	</Route>

*/ 

export default Routes;