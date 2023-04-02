// Callback: es una función que se pasa como parámetro dentro de otra función

const arraySwap = (arreglo, indice1, indice2) => {
	let aux = arreglo[indice1];
	arreglo[indice1] = arreglo[indice2];
	arreglo[indice2] = aux;
}

const ordenCreciente = (numero1, numero2) => {
	return numero1 > numero2;
}

const ordenDecreciente = (numero1, numero2) => {
	return numero1 < numero2;
}

// La siguiente función recibe, como segundo parámetro, una función "callback"
// que será llamada dentro de esta misma función, para definir cómo se deben ordenar los elementos del arreglo:
const ordenarArreglo = (arreglo, tipoDeOrden) => {
	let iteraciones = arreglo.length - 1;

	for (let i = 0; i < iteraciones; ++i)
		for (let j = 0; j < iteraciones - i; ++j)
			if (tipoDeOrden(arreglo[j], arreglo[j + 1]) /* se llamó a la función callback para comparar los dos elementos */ )
				arraySwap(arreglo, j, j + 1);
}

let arreglo = [5, 7, 2, 8, 4, 3, 0];

console.log("Arreglo desordenado: " + arreglo);

ordenarArreglo(arreglo, ordenCreciente); // "ordenCreciente" se utiliza como función callback, será utilizada dentro de ordenarArreglo()
console.log("Arreglo en orden creciente: " + arreglo);

// Cuando se ingresa una función callback como parámetro, se puede definir la misma directamente, dentro de los parámetros
// se la puede definir como función flecha o como función normal, y no es necesario darle un nombre a la función:

ordenarArreglo(arreglo, (numero1, numero2) => numero1 < numero2); // Esa función flecha de orden decreciente se utiliza como callback, será utilizada dentro de ordenarArreglo()
console.log("Arreglo en orden decreciente: " + arreglo);