// Destructuring de Arrays

// ------------------------------------------------------------------------------------------------------------------------
// Destructuring de Arrays lo que hace es irlos extrayéndolos según la posición
const tecnologias = ["html", "css", "javascript", "react", "nodejs"];
const [html, css, js, react2, nodejs] = tecnologias;
console.log(html); // html
console.log(css); // css
console.log(js); // javascript
console.log(react2); // react
console.log(nodejs); // nodejs

// ------------------------------------------------------------------------------------------------------------------------
// Envase a la posición directamente
const tecnologias2 = ["html", "css", "javascript", "react", "nodejs"];
const react = tecnologias2[3];
console.log(react); // react

// ------------------------------------------------------------------------------------------------------------------------
// Envase a la posición directamente con comas (,)
const tecnologias3 = ["html", "css", "javascript", "reactjs", "nodejs"];
const [, , , reactjs] = tecnologias3;
// Aquí se ignoran las posiciones 0, 1 y 2, y se asigna la posición 3 a la variable react
// Esto es útil cuando solo te interesa una o pocas posiciones del array
console.log(reactjs);
