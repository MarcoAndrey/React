// Template strings y concatenacion
// Unir dos o mas objetos

// ------------------------------------------------------------------------------------------------------------------------

const producto = "Tablet de 12 pulgadas";
const precio = 400;
const marca = "Orange";

console.log("El producto es: " + producto);
console.log(`El producto es: ${producto}`);

// template string
// es mejor utilizar template strings para unir cadenas de texto
// porque es mas legible y evita errores de sintaxis
// y es mas facil de leer y escribir

console.log(`${producto} $${precio} Dolares, Marca: ${marca}`);

// ------------------------------------------------------------------------------------------------------------------------
// este codigo puede que nos haga cometer errores l¿por lo largo de la cadena

console.log(producto + " $ " + precio + " Dolares, Marca: " + marca);
