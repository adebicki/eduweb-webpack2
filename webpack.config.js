const path = require("path");
// or:
// const {resolve} = require("path"); // and later use resolve() instead of path.resolve();
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            },
            {
                test: /\.hbs$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'handlebars-loader'
                }
            },
            {
                test: /\.scss$/,
                // use: [{
                //     loader: "style-loader" // creates style nodes from JS strings
                // }, {
                //     loader: "css-loader" // translates CSS into CommonJS
                // }, {
                //     loader: "sass-loader" // compiles Sass to CSS
                // }]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            },
            // {
            //     test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
            //     use: {
            //         loader: 'file-loader'
            //     }
            // }
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader', // it uses file-loader!
                    options: {
                        limit: 10000, // if image smaller, then make it base64 in css
                        name: "[name].[ext]"
                    }
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]

};