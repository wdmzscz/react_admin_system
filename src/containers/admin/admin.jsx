import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { reqCategoryList } from "../../api/index";
import { Layout } from "antd";
import Header from "./header/header";
import NavLeft from "./nav/nav_left";
import { CreateDeleteUserInfoAction } from "../../redux/actions_creators/login_action";
import "./css/admin.less";
import Home from "../../components/home/home";
import Category from "../category/category";
import Bar from "../bar/bar";
import UserManagement from "../userManagement/userManagement";
import Line from "../line/line";
import Pie from "../pie/pie";
import Role from "../role/role";
import Product from "../product/product";

const { Footer, Sider, Content } = Layout;
class Admin extends React.Component {
	componentDidMount() {}

	logOut = () => {
		this.props.deleteUserInfo();
	};

	demo = async () => {
		let result = await reqCategoryList();
	};

	// render method need to 'return', you should better use redirect
	render() {
		const { isLogin } = this.props.userInfo;
		if (!isLogin) {
			//this.props.history.replace('/login')
			return <Redirect to="/login" />;
		} else {
			return (
				<Layout className="admin">
					<Sider className="sider">
						<NavLeft />
					</Sider>
					<Layout>
						<Header>Header</Header>
						<Content className="content">
							<Switch>
								<Route path="/admin/home" component={Home} />
								<Route path="/admin/products/category" component={Category} />
								<Route path="/admin/products/product" component={Product} />
								<Route path="/admin/user" component={UserManagement} />
								<Route path="/admin/role" component={Role} />
								<Route path="/admin/charts/pie" component={Pie} />
								<Route path="/admin/charts/line" component={Line} />
								<Route path="/admin/charts/bar" component={Bar} />
								<Redirect to="/admin/home"></Redirect>
							</Switch>
						</Content>
						<Footer className="footer">
							Recommend using chrome browser for better experience
						</Footer>
					</Layout>
				</Layout>
			);
		}
	}
}

export default connect((state) => ({ userInfo: state.userInfo }), {
	deleteUserInfo: CreateDeleteUserInfoAction,
})(Admin);
