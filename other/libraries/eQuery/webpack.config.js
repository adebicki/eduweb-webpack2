const { resolve } = require("path");

module.exports = {

    entry: {
        eQuery: "./src/main.js"
    },

    output: {
        path: resolve(__dirname + "/../js/"),
        filename: "[name].js",
        library: "eQuery",
        libraryTarget: "umd",
        umdNamedDefine: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"],
                        plugins: ["add-module-exports", "transform-runtime"]
                    }
                }
            }
        ]
    }

};