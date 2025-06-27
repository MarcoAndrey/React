// Manipulación de Objetos en JavaScript es básicamente cambiar sus valores

// ------------------------------------------------------------------------------------------------------------------------

// Objetos - Manipulación
const producto = {
  nombre: "Table",
  precio: 300,
  displonible: false,
};

// Object.freeze(producto) esto hace que el objeto no se pueda modificar, ni agregar ni eliminar propiedades

// Object.seal(producto) te permite modificar las propiedades existentes, pero no agregar nuevas ni eliminar las existentes

// Reescribir un valor
producto.displonible = true;

// Si no existe, lo va agregar
producto.imagen = "imagen.jpg";

// Eliminar propiedad
delete producto.precio;

console.log(producto);
