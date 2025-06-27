// Objetos y Destructuring

// un objeto es una coleccion de propiedades, cada propiedad tiene un nombre y un valor, es como un diccionario, donde cada palabra tiene su significado

// siempre que se utiliza let o const significa que estos son objetos, es decir, son una coleccion de propiedades y metodos, por lo tanto, se pueden acceder a ellos de diferentes maneras

// Esta forma es como generas objetos

// const producto = {
//   nombre: "Table",
//   precio: 300,
//   displonible: false,
// }

// ------------------------------------------------------------------------------------------------------------------------

// Esta forma es como accedes a ellos

// console.log(producto)
// console.table(producto)
// console.log(producto.nombre)

// ------------------------------------------------------------------------------------------------------------------------

// Versiones recientes de JS agregaron Destructuring es mnuy buena porque puedes hacer todo con una sola linea de codigo

//  const { nombre, precio, displonible } = producto
//  console.log(nombre)
//  console.log(precio)
//  console.log(displonible)

// ------------------------------------------------------------------------------------------------------------------------

// Era muy comun en versiones anteriores de Js

// const nombre = producto.nombre
// const precio= producto.precio
// const displonible = producto.displonible
// console.log(nombre)
// console.log(nombre)
// console.log(precio)
// console.log(displonible)

// ------------------------------------------------------------------------------------------------------------------------

// Object Literal Enhacement sirve para crear objetos de una manera mas sencilla, es decir, si tienes una variable y quieres crear un objeto con esa variable, puedes hacerlo de la siguiente manera:

// const autenticado = true
// const usuario = "Marco"

// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario: usuario
// }

// console.log(nuevoObjeto)

// Esto es útil cuando tienes una función que realizas ciertas operaciones y, en lugar de retornar un montón de variables, retornas un objeto donde venga todo agrupado

// ------------------------------------------------------------------------------------------------------------------------

// Object Literal Enhacement esto solo aplica si se llaman igual la llave y el valor

// const autenticado = true
// const usuario = "Marco"

// const nuevoObjeto = {
//     autenticado,
//     usuario
// }

// console.log(nuevoObjeto)
