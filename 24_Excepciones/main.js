// Sentencia try {} intenta ejecutar un bloque de código, en caso de haber un error, devolverá un objeto "error".
// La sentencia catch (error) {} recibe ese error como parámetro, y ejecutará un bloque de código en caso de que se presente un error en el try {}

// Las sentencias try y catch siempre deben ir juntas (no se puede utilizar "try" sin un "catch")

try {
	console.log(variable); // error: "variable" no está definida
}

catch (error) {
	console.log(error); // imprimirá en pantalla el error obtenido en el bloque try {}
	console.log(typeof error); // el error es un objeto, lo puedo comprobar usando el operador typeof

	// TRY Y CATCH NO FUNCIONAN PARA ERRORES DE SINTAXIS
}

// La sentencia finally se ejecutará siempre (haya error o no)
// finally se ejecuta incluso si está dentro de una función la cual ya había alcanzado un "return" antes del finally

finally {
	console.log("Me ejecuto siempre");
}

// Dentro del try puedo usar la sentencia "throw" para enviar un mensaje de error
// Ese mensaje de error se podrá ver a través del objeto "error" en la sentencia catch

try {
	throw "Lulú, Titina, Manuel";
}

catch (error) {
	console.log(error);
}

// throw también puede usarse para generar un error fuera del try
// En el siguiente ejemplo throw devolverá, en lugar de una string, un objeto:

throw {
	nombre: "Error #2",
	descripcion: "Este es un error de ejemplo"
};