###### Manual webpack run:

node_modules\.bin\webpack "src/js/app.js" "dist/budle.js"
node_modules\.bin\webpack.cmd "src/js/app.js" "dist/budle.js"
node_modules\webpack\bin\webpack.js "src/js/app.js" "dist/budle.js" (mac/linux?)

###### rimraf

Moduł npm rimraf umożliwia kasowanie folderów niezależnie od systemu operacyjnego (na win skrypy npm "rm -rf dist" nie zadziała)

###### npm scripts prescript
Jeśli mamy skrypt np. "build", i "prebuild", to wykonanie build automatycznie wywoła najpierw prebuild

###### webpack dev server
webpack -w -> śledzi zmiany
npm run script-name -- -param -> przekazanie parametru do skryptu npm
npm start -> uruchomi skrypt o nazwie "start"
npm install webpack-dev-server --save-dev

skrypt npm o treści: "webpack-dev-server --content-base src/"
content-base -> skąd ma być serwowana aplikacja, czyli z folderu src
Jeśli skrypt js jest poza src, to nie uda nam się go dołączyć poprzez <script src="../....">, trzeba użyć
parametru publicPath w sekcji output pliku konfiguracyjnego webpacka, np. publicPath: "/dist/"


next:
https://eduweb.pl/player/webpack-wydajna-praca-javascript/importowanie-modulow-z-npm
