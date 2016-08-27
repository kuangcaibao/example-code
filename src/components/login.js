import React, { Component } from "react";

export default class Login extends Component {

	render() {

		return (

			<div className="tdx-body">

				<div className="tdx-panel" style={{width: "70%"}}>
					
					<div className="tdx-panel-head">首页 / 登录</div>
					<div className="tdx-panel-body">
						
						<form className="form-horizontal">
							<div className="form-group">
								
								<label htmlFor="name" className="col-sm-3 control-label">用户名</label>
								<div className="col-sm-9">
									<input type="text" id="name" placeholder="请输入用户名" className="form-control" />
								</div>
							</div>

							<div className="form-group">
								
								<label htmlFor="pwd" className="col-sm-3 control-label">密  码</label>
								<div className="col-sm-9">
									<input type="password" id="pwd" placeholder="请输入密码" className="form-control" />
								</div>
							</div>

							<div className="form-group">
								
								<div className="col-sm-offset-3 col-sm-10">
									<button className="btn btn-default">登  录</button>
								</div>
							</div>
						</form>

					</div>

				</div>

			</div>
		)
	}
}