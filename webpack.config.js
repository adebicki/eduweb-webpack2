const path = require("path");
// or:
// const {resolve} = require("path"); // and later use resolve() instead of path.resolve();

module.exports = {

    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        // path: resolve(__dirname, "dist/"),
        filename: "bundle.js"
    }

};