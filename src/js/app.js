import "../sass/main.scss";

import "es6-promise/auto";
// import $ from "jquery";
// import getUsersHTML from "./Users";

let container = $(".container"),
    button = $(".button");

button.on("click", function() {

    // warunkowe ładowanie modułu
    // funkcja import zwraca promise
    // składnia eksperymentalna
    import("./Users")
        // .then(function(module) {
        .then(function({default: getUsersHTML}) { // module.default.getUsersHTML
            getUsersHTML()
                .then(html => {
                    container.append(html);
                });
        });

    // getUsersHTML()
    //     .then(html => {
    //         container.append(html);
    //     });
});