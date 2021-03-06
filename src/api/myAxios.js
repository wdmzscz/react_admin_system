import axios from "axios";
import NPROGRESS from "nprogress";
import qs from "querystring";
import store from "../redux/store";
import { CreateDeleteUserInfoAction } from "../redux/actions_creators/login_action";
import "nprogress/nprogress.css";
import { message } from "antd";

const instance = axios.create({
	timeout: 10000,
});

instance.interceptors.request.use(
	(config) => {
		// Do something before request is sent
		NPROGRESS.start();
		//using getState method to fetch token from storejs
		const { token } = store.getState().userInfo;
		if (token) {
			config.headers.Authorization = token;
		}
		const { method, data } = config;
		if (method.toLowerCase() === "post" && typeof data === "object") {
			config.data = qs.stringify(data);
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	(response) => {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		NPROGRESS.done();
		return response;
	},
	(error) => {
		NPROGRESS.done();
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		if (error.response.status === 401) {
			message.error("Authentication failed, please re-login.", 1);
			store.dispatch(CreateDeleteUserInfoAction);
		} else {
			message.error(error.message, 1);
		}
		return Promise.reject(error);
	}
);

export default instance;
