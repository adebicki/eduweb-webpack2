const path = require("path");
// or:
// const {resolve} = require("path"); // and later use resolve() instead of path.resolve();

module.exports = {

    entry: "./src/js/app.js",

    output: {
        publicPath: "/dist/",
        path: path.resolve(__dirname, "dist/"),
        // path: resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                        // presets: ['@babel/preset-env'],
                        // plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                    }
                }
            }
        ]
    }

};