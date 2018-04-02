###### Manual webpack run:

node_modules\\.bin\webpack "src/js/app.js" "dist/budle.js"

node_modules\\.bin\webpack.cmd "src/js/app.js" "dist/budle.js"

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

Jeśli skrypt js jest poza src, to nie uda nam się go dołączyć poprzez \<script src="../....">
, trzeba użyć parametru publicPath w sekcji output pliku konfiguracyjnego webpacka, np. publicPath: "/public/"
(o ile sie orientuję, to będzie serwowane z pamięci i nie ma nic wspólnego z fizycznymi folderami,
w kursie dał dist i był folder fizyczny dist, ale to nic nie zmienia)

raw-loader (np zamias css-loadera ?)
file-loader - kopiuje plik znaleziony np w css (np png) i nadaje mu nazwę hash.png (może można skonfigurować?)
url-loader (korzysta z file-loadera), może zmienić obrazek w css na base64, można też określić nazwę obrazka wynikowego
("The url-loader works like the file-loader, but can return a DataURL if the file is smaller than a byte limit"")
Może sprawdź w google "list of webpack loaders" ?
https://github.com/webpack/docs/wiki/list-of-loaders

###### html webpack plugin
Generuje html (można mu podać szablon) i sam do niego dodaje odwołania do css i js w head i stopce.
Problem jest taki, że odpalając webpack dev server w parametrze podajemy content base do folderu src, a wygenerowany
plik będzie w dist, tak więc musimy odpalić apkę z localhost:8080/dist/index.html
(localhost:8080 weźmie index.html z folderu src)

###### prosty server
npm install --save-dev http-server
Prosty serwer www

###### warunkowe ładowanie modułów
można użyć składni eksperymentalnej gdzieś w kodzie, np w f-cji obsługi kliknięcia - funkcja:
import(path-to-module).then(function(module){})
babel się wykrzaczy, dlatego instalujemy:
npm install --save-dev babel-plugin-syntax-dynamic-import
dodajemy sekcję plugins dla babela w webpack.config.js - plugins: ['syntax-dynamic-import']
to ma sens, jak jest jakiś duży fragment kodu, który jest potencjalnie niepotrzebny, dopiero jak user coś kliknie
Wymaga polyfill dla promise (uzycie then)
npm install --save es6-promise
import "es6-promise/auto";

###### tree shaking
od v2 weboacka tree shaking działa automatycznie
usuwa nieużywane esportowane funkcje?

###### source maps
https://webpack.js.org/configuration/devtool/
do webpack.config.js dodajemu sekcję devtool, np:
devtool: "eval" - z konsoli przeglądarki (np jakiś console.log) będzie nas kierować do odpowiedniego pliku
(w tym przypadku w kodzie wygenerowanym)
nie wszystkie wartości nadają się na produkcję
devtool: "cheap-module-eval-source-map" - kieruje do kodu oryginalnego
devtool: "source-map" - nadaje się na produkcję
devtool: prod ? "source-map" : "cheap-module-eval-source-map",
jak jest eval, to source mapy są inlinowo (to chyba od tego zależy)

###### Korzystanie z modułów bez importu
Teraz mamy w jakimś module np. import $ from "jquery"; $ jest dostępne tylko w tym module
A chemy mieć wszędzie dostępne pod $ bibliotekę jQuery bez importowania
Możemy skorzystać z ProvidePlugin webpacka w sekcji plugins configa
new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
})
teraz $ i jQuery będą w modułach automatycznie dostępne

###### THE END:

Lista zasobów na temat Webpacka:

https://github.com/webpack-contrib/awesome-webpack
