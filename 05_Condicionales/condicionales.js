/// Condicionales: se usa if (condicion) {bloque de codigo}
// el bloque de código se ejecutará solo si la condición es true
// en caso de que no se cumpla, puedo agregar otro condicional con else

if (false) {
	document.write("<h1>Hola</h1>")
}
else if (false) {
	document.write("<h1>Hola</h1>")
}
else {
	document.write("<h1>Hola</h1>")
}

/// Otra forma: usar operador ternario ?, funciona igual que en C++
// Sintaxis [condicion] ? [codigo en caso de true] : [codigo en caso de false];

true ? document.write("<h2>True</h2>") : document.write("<h2>False</h2>");