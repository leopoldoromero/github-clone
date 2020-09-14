const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/app/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
}