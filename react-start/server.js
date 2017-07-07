// path基础模块
const path = require("path");
// webpack模块
const webpack = require("webpack");


// 将使用express模块开启一台服务器
const express = require("express");
// dev中间件
const webpackDevMiddleware = require("webpack-dev-middleware");
// 热替换中间件
const webpackHotMiddleware = require("webpack-hot-middleware");

// 获取webpack本地配置模块
const config = require("./webpack.config");

config.entry.unshift("webpack-hot-middleware/client?reload=true");

// app为服务器实例
let app = new express();
// 根据webpack配置生成编译对象
let compiler = webpack(config);
// 监听端口号
let port = 7000;

// 构建
app.use(webpackDevMiddleware(compiler));
// 开启热加载
app.use(webpackHotMiddleware(compiler));
// 开启服务器，监听客户端请求
app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "dist/index.html")));
app.listen(port);