const path = require("path");

const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.NODE_ENV === "production" ? "/qunar" : "/";

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@css", resolve("src/assets/css"))
      .set("@c", resolve("src/common"));
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  //解决跨域
  devServer: {
    proxy: "http://localhost:8080"
  }
};
