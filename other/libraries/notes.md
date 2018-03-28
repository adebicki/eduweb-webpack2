https://webpack.js.org/guides/author-libraries/

w webpack.config.js w output dodajemy library, libraryTarget i umdNamedDefine

biblioteka musi coś eksportować (np. export default init;)

Teraz mamy niby bibliotekę, którą możemy importować na wiele sposobów, ale jeśli
dodamy ją normalnie na stronie < script src > to nie damy rady użyć eQuery(...), tylko
jako eQuery.default(...) - bo babel miesza. Potrzebny plugin:
npm install --save-dev babel-plugin-add-module-exports
i podać plugin do babela w webpack.config.js

Trzeba pamiętać, że niektóre rzeczy trzeba polyfillować. Babel przetranspiluje składnię, 
ale nie wywołania nowych funkcji es6, np new WeakMap(); Można użyć babel-polyfill, no ale
jeśli tworzymy bibliotekę, to niedobrze ją dystrybuować z polyfillami (raz, że duże,
dwa, że one nadpisują globalne obiekty [bez sensu, chyba mają if'y?])

Lepiej użyć babel runtime transform
npm install --save-dev babel-plugin-transform-runtime
i dodać do pluginów babela w webpack.confif.js

transform-runtime nie dodaje polyfilli do rzeczy zdefiniowanych na prototypie
(np. String.repeat())