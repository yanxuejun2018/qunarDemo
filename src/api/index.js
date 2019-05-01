import ajax from "./ajax";
//1.基础路径
const BASE_URL = "";
//请求首页数据
export const getHomeData = () => ajax(BASE_URL + "/");
