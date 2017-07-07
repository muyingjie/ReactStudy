const path = require("path");
const webpack = require("webpack");
// 和最终生成的html相关的配置
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 最顶层js，入口
    entry: [
        "./src/app.jsx"
    ],
    // 将打包好的js输出到dist目录下，名为main.js
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist/")
    },
    // use中使用到的插件都需要加到package.json的开发依赖中
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: ["babel-loader"],
                include: [
                    path.resolve(__dirname, "./src")
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg)$/,
                use: ["url-loader?limit=8192"]
            }
        ]
    },
    plugins: [
        // server.js中已经通过加载中间件的形式加载过webpackHotMiddleware中间件了
        // 因此这里webpack对象会有HotModuleReplacementPlugin方法
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // 打包好了之后在dist目录中生成的文件名及文件位置
            filename: "index.html",
            // 读取的源文件模板
            template: "./src/index.html"
        }),
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
            Component: ["react", "Component"],
            PT: "prop-types"
        })
    ]
};