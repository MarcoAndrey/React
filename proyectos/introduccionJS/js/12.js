// Arreglos iteraciones (FOR)
// ------------------------------------------------------------------------------------------------------------------------
// Iterarar nos permite acceder a cada valor de nuestro arreglo
const tecnologias = ["html", "css", "javascript", "react", "nodejs"];
for (let i = 0; i < 5; i++) {
  console.log(tecnologias[i]); // html, css, javascript, react, nodejs
}

// ------------------------------------------------------------------------------------------------------------------------

// Tres alternativas de iterar un arreglo For
// 1. Foreach es un metodo que ejecuta una funcion indicada por cada elemento del arreglo, el foreach vas a ver cuantos elementos ahi en tu arrelgo y va ejecutarse unicamente esa cantidfad de veces

tecnologias.forEach(function (tech) {
  console.log(tech);
});

// ------------------------------------------------------------------------------------------------------------------------

// Map
// El map es un metodo que crea un nuevo arreglo con los resultados de la llamada a la funcion indicada por cada elemento del arreglo, el map va a iterar el arreglo y va a crear un nuevo arreglo con los resultados de la funcion indicada, su caracteristica principal es que crea un nuevo arreglo en base a las condiciones de la funcion

tecnologias.map(function (tech) {
  console.log(tech);
});
