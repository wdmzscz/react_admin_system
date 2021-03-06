import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { reqLogin } from "../../api";
import { Redirect } from "react-router-dom";
import { AmazonOutlined, ChromeOutlined } from "@ant-design/icons";
import { createSaveUserInfoAction } from "../../redux/actions_creators/login_action";
import "antd/dist/antd.css";
import "./css/login.less";
import { connect } from "react-redux";
import logo from "./img/logo.png";

class Login extends React.Component {
	pwdvalidator = (rule, value) => {
		if (!value) {
			return Promise.reject("Password are required");
		} else if (value.length < 4) {
			return Promise.reject("length must at lease 4 digit");
		} else if (value.length > 12) {
			return Promise.reject("length must at lease 4 digit");
		} else if (!/^\w+$/.test(value)) {
			return Promise.reject("password must have number, letter and underscore");
		} else {
			return Promise.resolve();
		}
	};

	render() {
		const { isLogin } = this.props.userInfo;
		const layout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 16,
			},
		};
		const tailLayout = {
			wrapperCol: {
				offset: 8,
				span: 16,
			},
		};

		const onFinish = (values) => {
			const { username, password } = values;
			reqLogin(username, password)
				.then((result) => {
					if (result.data.status === 0) {
						//1.service return user info and token , and send to redux
						this.props.saveUserInfo(result.data);
						//2.switch to admin page
						this.props.history.replace("admin");
					} else {
						message.error(result.data.msg);
					}
				})
				.catch((result) => {
					console.log("result:", result);
				});
		};

		const onFinishFailed = (errorInfo) => {
			console.log("Failed:", errorInfo);
		};

		if (isLogin) {
			return <Redirect to="/admin/home" />;
		} else {
			return (
				<div className="login">
					<header>
						<img src={logo} alt="logo" />
						<h1>Product Management System</h1>
					</header>
					<section>
						<h1>USER LOGIN</h1>
						<Form
							{...layout}
							name="basic"
							initialValues={{ remember: true }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
						>
							<Form.Item
								label="Username"
								name="username"
								rules={[
									{
										required: true,
										message: "Please input your username!",
									},
									{
										min: 4,
										message: "Username length must at least 4 digit!",
									},
									{
										max: 12,
										message: "Username length must at most 12 digit!",
									},
									{
										pattern: /^\w+$/,
										message: "Username should contain _,number,letter!",
									},
								]}
							>
								<Input
									prefix={
										<AmazonOutlined
											type="amazon"
											style={{ color: "rgba(0,0,0,.25)" }}
										/>
									}
								/>
							</Form.Item>

							<Form.Item
								label="Password"
								name="password"
								rules={[
									{
										validator: (rule, value) => {
											return this.pwdvalidator(rule, value);
										},
									},
								]}
							>
								<Input.Password
									prefix={
										<ChromeOutlined
											type="amazon"
											style={{ color: "rgba(0,0,0,.25)" }}
										/>
									}
								/>
							</Form.Item>

							<Form.Item
								{...tailLayout}
								name="remember"
								valuePropName="checked"
							>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<Form.Item {...tailLayout}>
								<Button type="primary" htmlType="submit">
									Submit
								</Button>
							</Form.Item>
						</Form>
					</section>
				</div>
			);
		}
	}
}

export default connect((state) => ({ userInfo: state.userInfo }), {
	saveUserInfo: createSaveUserInfoAction,
})(Login);
