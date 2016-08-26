import React from "react";
import { browserHistory, Router, Route } from "react-router";

import {

	App,
	Login,
	Signup

} from "./components"

var Routes = (

	<Route path="/" component={App}>
		<Route path="/login" component={Login} />
		<Route path="/signup" component={Signup} />
	</Route>

)

export default Routes;