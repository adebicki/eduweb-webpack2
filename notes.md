###### Manual webpack run:

node_modules\.bin\webpack "src/js/app.js" "dist/budle.js"
node_modules\.bin\webpack.cmd "src/js/app.js" "dist/budle.js"
node_modules\webpack\bin\webpack.js "src/js/app.js" "dist/budle.js" [mac/linux?]

###### rimraf

Moduł npm rimraf umożliwia kasowanie folderów niezależnie od systemu operacyjnego (na win skrypy npm "rm -rf dist" nie zadziała)

###### npm scripts prescript
Jeśli mamy skrypt np. "build", i "prebuild", to wykonanie build automatycznie wywoła najpierw prebuild


next:
https://eduweb.pl/player/webpack-wydajna-praca-javascript/korzystanie-z-webpack-dev-server
