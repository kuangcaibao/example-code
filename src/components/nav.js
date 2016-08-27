import React, { Component } from "react";
import { Link, Router, browserHistory } from "react-router";

import User from "../controller/auth";
import tdxFetch from "../common/req";

export default class Nav extends Component {

	constructor(props, context) {
		super(props, context);
		this.logoutClick = this.logoutClick.bind(this);
		this.state = {
			loginStatus: User.getLoginStatus()
		}
	}

	logoutClick(e) {

		e.preventDefault();
		tdxFetch("/api/logout")
		.then(res => res.json())
		.then( res =>  {
			if(res.ErrorCode == 0) {
				User.setLoginStatus(false);
				this.setState({
					loginStatus: User.getLoginStatus()
				});
			} else {
				alert(res.ErrorInfo);
			}
		})
		.catch( err => {
			alert(err);
		});
	}

	componentDidMount() {

		if(!this.state.loginStatus) {
			browserHistory.push("/login");
		}
	}

	render() {
		var rightArea = "";
		if(User.getLoginStatus()) {
			rightArea = (
				<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
			          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
			          <ul className="dropdown-menu">
			            <li><Link to="#">个人信息</Link></li>
			            <li onClick={this.logoutClick}>退出</li>
			          </ul>
			        </li>
		        </ul>
			);
		} else {
			rightArea = (
				<ul className="nav navbar-nav navbar-right">
					<li><Link to="/signup">注册</Link></li>
				    <li><Link to="/login">登录</Link></li>
				</ul>
			);
		}


		return (

			<nav className="navbar navbar-default">
			  <div className="container-fluid tdx-body">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <Link className="navbar-brand" to="/">TDX</Link>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      {rightArea}
			    </div>
			  </div>
			</nav>

		)
	}
}