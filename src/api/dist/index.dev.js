"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCategoryList = exports.reqCategoryList = exports.reqLogin = void 0;

var _myAxios = _interopRequireDefault(require("./myAxios"));

var _index = require("../config/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//login request
var reqLogin = function reqLogin(username, password) {
  return _myAxios["default"].post("".concat(_index.BASE_URL, "/login"), {
    username: username,
    password: password
  });
};

exports.reqLogin = reqLogin;

var reqCategoryList = function reqCategoryList() {
  return _myAxios["default"].get("".concat(_index.BASE_URL, "/manage/category/list"));
};

exports.reqCategoryList = reqCategoryList;

var addCategoryList = function addCategoryList(categoryName) {
  var value = categoryName.categoryName;
  return _myAxios["default"].post("".concat(_index.BASE_URL_LOCAL, "manage/category/add"), {
    categoryName: value
  });
};

exports.addCategoryList = addCategoryList;