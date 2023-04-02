// Operaciones asíncronas: ocurren en tiempo real

// Las promesas son asíncronas (esperarán el tiempo que sea necesario para obtener un valor resolve/reject):
const obtenerCodigo = () => {
    // Aquí estoy creando una función cuya respuesta sea una promesa:
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(177013)}, 3000);
    });
}

// PRIMERA FORMA:
// Simplemente, la función retorna una promesa (ya que éstas son asíncronas) y gestiono esa promesa con .then()
obtenerCodigo().then(respuesta => console.log(respuesta));

// SEGUNDA FORMA:
// El operador "await" debe usarse antes de invocar a una función cuya respuesta sea una promesa.
// La función del operador "await" es acceder al valor que retorna una promesa.
// El opoerador "await" solo puede usarse dentro de funciones asíncronas (aquellas que se declaran con async).
const imprimirResultado = async () => {
    resultado = await obtenerCodigo();
    console.log(resultado);
}
imprimirResultado();

// BENEFICIO DE USAR EL OPERADOR AWAIT:
// Hacer que las respuestas de un servidor (que pueden tardar un tiempo en llegar) se impriman en orden.
const servidorFalso = texto => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(texto)}, Math.random() * 500);
    });
}

async function imprimirEnOrden() {
    // await no permite que se avance a la siguiente línea hasta que se obtenga el valor de la promesa
    // por eso el operador await es tan útil para controlar el orden en que se obtienen los resultados
    let primero = await servidorFalso("primero");
    let segundo = await servidorFalso("segundo");
    let tercero = await servidorFalso("tercero");
    console.log(primero);
    console.log(segundo);
    console.log(tercero);
}

imprimirEnOrden();