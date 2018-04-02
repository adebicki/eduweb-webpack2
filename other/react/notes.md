test: /\.jsx?$/, - znak zapytania oznacza, że "x" jest opcjonalne, znaczy dla .js też zadziała

Babel nie zrozumie zapisu Reacta, więc:

npm install --save-dev babel-preset-react
presets: ["react", "es2015"]

No i sam react:
npm install --save react react-dom

Korzystamy z fetch i promisów, więc powinniśmy zainstalować polyfille:
npm install --save es6-promise whatwg-fetch
w index.jsx:
import "es6-promise/auto";
w webpack.config.js:
vendors: ["react", "react-dom", "es6-promise/auto", "whatwg-fetch"]
(wyciągnie z tego commonschunkplugin)

Możemy sobie włączyć opcję "modules" css-loader'a:
use: "css-loader?modules=true!sass-loader"
Teraz css będzie miał losowo generowane klasy, więc apka wizualnie się wysypie
W Button.jsx zmieniamy:
import "../../sass/components/_buttons.scss";
na:
import styles from "../../sass/components/_buttons.scss";
teraz w styles będziemy mieli: Object { button: "_2Lbr41o9I6WS-GUwho0bLa" }
czyli opcja modules=true zmienia klasę .button na losowy ciąg
Więc w komponencie react zmienić musimy:
<button className="button" ...
na:
<button className={styles.button}
Tak samo musimy zrobić w innych plikach, gdzie importujemy scssy.
np. "user__name" zmieniamy na {styles.user__name}

Ale nie chemy, żeby główne style też miały zmieniane klasy (np. .container w main.scss)
Dodajemy exlude do testu w webpack.config.js
exclude: /main\.scss$/,

Rzecz jasna teraz trzeba ustawić osobny test tylko dla pliku main.scss