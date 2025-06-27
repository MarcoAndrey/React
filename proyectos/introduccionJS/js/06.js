// Objetos - Destructuring de dos o mas objetos

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
  direccion: {
    calle: "Bogota",
  },
};

const { nombre } = producto;
const {
  nombre: nombreCliente,
  direccion: { calle },
} = cliente;

console.log(nombre);
console.log(nombreCliente);
console.log(calle);
