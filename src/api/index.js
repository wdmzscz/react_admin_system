import myAxios from "./myAxios";
import { BASE_URL, BASE_URL_LOCAL } from "../config/index";

//login request
export const reqLogin = (username, password) => {
	return myAxios.post(`${BASE_URL}/login`, { username, password });
};

export const reqCategoryList = () => {
	return myAxios.get(`${BASE_URL}/manage/category/list`);
};

export const addCategoryList = (categoryName) => {
	let value = categoryName.categoryName;
	return myAxios.post(`${BASE_URL_LOCAL}manage/category/add`, {
		categoryName: value,
	});
};
