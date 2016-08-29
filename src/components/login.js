import React, { Component } from "react";
import { browserHistory } from "react-router";
import tdxFetch from "../common/req";
import { INFO_LOGIN_ERROR } from "./info";

export default class Login extends Component {

	constructor() {
		super();
		this.loginClick = this.loginClick.bind(this);
		this.rnd = parseInt((Math.random() * 1000).toString(), 16);
	}

	loginClick(e) {
		// debugger;
		e.preventDefault();

		var name = $(`#${this.rnd}_name`).val();
		var pwd = $(`#${this.rnd}_pwd`).val();

		if(typeof name === "undefined" || name == "" || typeof pwd === "undefined" || pwd == "") {
			console.log(INFO_LOGIN_ERROR);
			return;
		}

		tdxFetch("/login", { 
			method: "POST",
			body: JSON.stringify({ name, pwd })
		})
		.then( res => res.json())
		.then( res => {
			// debugger;
			if(res.ErrorCode == 0) {
				// 登录成功
				// 将User放在 localStorage 中缓存下来
				debugger;
				localStorage.setItem("User", JSON.stringify(res.rows[0]));
				browserHistory.push("/");
			} else {
				console.log(res.ErrorInfo);
			}
		})
		.catch(err => console.log(err))

		return false;
	}

	render() {


		return (
			<div className="tdx-body">

				<div className="tdx-panel" style={{width: "70%"}}>
					
					<div className="tdx-panel-head">首页 / 登录</div>
					<div className="tdx-panel-body">
						
						<form className="form-horizontal">
							<div className="form-group">
								
								<label htmlFor={`${this.rnd}_name`} className="col-sm-3 control-label">用户名</label>
								<div className="col-sm-9">
									<input type="text" id={`${this.rnd}_name`} placeholder="请输入用户名" className="form-control" />
								</div>
							</div>

							<div className="form-group">
								
								<label htmlFor={`${this.rnd}_pwd`} className="col-sm-3 control-label">密  码</label>
								<div className="col-sm-9">
									<input type="password" id={`${this.rnd}_pwd`} placeholder="请输入密码" className="form-control" />
								</div>
							</div>

							<div className="form-group">
								
								<div className="col-sm-offset-3 col-sm-10">
									<button className="btn btn-default" onClick={this.loginClick}>登  录</button>
								</div>
							</div>
						</form>

					</div>

				</div>

			</div>
		)
	}
}