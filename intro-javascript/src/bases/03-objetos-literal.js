// Objetos literales

const persona = {
	nombre: 'Tony',
	apellido: 'Stark',
	edad: 45,
	direccion: {
		ciudad: 'New York',
		zip: 4302,
		latlng: {
			lat: 45.15423,
			lng: 162.3242345,
		},
	},
};

// console.table(persona);
console.log(persona);

// Asi copiamos la referencia al espacio de memoria del objeto persona.
const persona2 = persona;

// Esta es la forma correcta de copiar un objeto
const copiaPersona = { ...persona, nombre: 'Peter' };

console.log(persona2);
console.log(copiaPersona);
