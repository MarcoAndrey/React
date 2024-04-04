// Objetos - Manipulación 


const producto = {
  nombre: "Table",
  precio: 300,
  displonible: false,
}

// Object.freeze(producto)

// Object.seal(producto)

// Reescribir un valor
producto.displonible = true

// Si no existe, lo va agregar
producto.imagen = 'imagen.jpg'

// Eliminar propiedad 
delete producto.precio

console.log(producto)