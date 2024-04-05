// Unir dos o mas objetos

// primer objeto
const producto = {
  nombre: "Table",
  precio: 300,
  displonible: false
}
// segundo objeto
const cliente = {
  nombre: "marco",
  premium: true
}
// Uniendo el producto 
// const carrito = {
//     cantidad: 1,
//     ...producto
// }

// la mejor forma de unir dos objetas 

const nuevoObjeto = Object.assign (producto, cliente)


console.log(nuevoObjeto)