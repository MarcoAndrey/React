// Unir dos o mas objetos

// ------------------------------------------------------------------------------------------------------------------------

// primer objeto
const producto = {
  nombre: "Table",
  precio: 300,
  displonible: false,
};
// segundo objeto
const cliente = {
  nombre: "marco",
  premium: true,
};

// ------------------------------------------------------------------------------------------------------------------------
// Forma 1: Usando el operador de propagación (spread operator)
// El operador de propagación (...) permite crear un nuevo objeto que contiene las propiedades
// de los objetos existentes. En este caso, estamos creando un nuevo objeto que combina
// las propiedades del objeto producto y del objeto cliente.
// Uniendo el producto
// const carrito = {
//     cantidad: 1,
//     ...producto
// }

// ------------------------------------------------------------------------------------------------------------------------
// la mejor forma de unir dos objetas
// Forma 2: Usando Object.assign
// Uniendo el producto y el cliente
// Object.assign() toma un objeto destino y uno o más objetos fuente, y copia las propiedades
// de los objetos fuente al objeto destino. El primer argumento es el objeto destino,
// y los siguientes argumentos son los objetos fuente que se van a unir.
// En este caso, estamos uniendo el objeto producto y el objeto cliente en un nuevo objeto
// llamado nuevoObjeto.

const nuevoObjeto = Object.assign(producto, cliente);

console.log(nuevoObjeto);
