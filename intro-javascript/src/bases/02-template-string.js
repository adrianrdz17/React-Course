// Template String
// Es una forma de interpolar caracteres y variables

const nombre = 'Gustavo';
const apellido = 'Rodriguez';

// Notese el uso de back ticks
const info = `${nombre} ${apellido} y mi edad es ${2023 - 2001}`;
console.log(info);

function getSaludo(nombre) {
	return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo('Adrian')}`);
