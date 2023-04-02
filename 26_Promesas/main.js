// Las promesas son un objeto que adentro tiene dos callbacks: reject y resolve

// Las promesas representan:
// terminación de una operación asíncrona
// fracaso de una operación asíncrona

let nombre = "Lulú, Titina, Manuel";

const promesa = new Promise((resolve, reject)=>{
    if (nombre !== "Lulú, Titina, Manuel")
        reject("Lo siento, el nombre no es: Lulú, Titina, Manuel");
    else
        resolve(nombre)
})

// El objeto promesa está encapsulado, no puedo acceder a sus miembros
console.log(promesa);

// El objeto promesa tiene un método .then(callback) que nos permite ingresar una función callback que trabaje con el valor del resolve
// Se debe agregar un bloque .catch() por si la promesa dio un error en lugar de llegar al resolve con éxito, en este caso, el parámetro "error" del bloque catch nos mostrará el valor que le dimos al reject
promesa.then(resultado => console.log(resultado)).catch(error => console.log(error));

// BENEFICIO DEL USO DE PROMESAS:
// en vez de crear muchos bloques, cada uno con su catch, para gestionar su error
// puedo crear varias promesas, invocar su método .then(), y agregar un único .catch() al final para gestionar cualquiera de los errores ocurridos

// Práctica compleja:

// Tengo tres objetos mascota, los cuales pueden tener o no, un nombre, instagram y facebook.
const lulu = {nombre: "Lulu", instagram: "@luluok", facebook: "Lulu Oficial"};
const titina = {nombre: "Titina", instagram: "@titinaok"};
const manuel = {nombre: "Manuel"};

// Tengo tres funciones para buscar miembros de los objetos cuyo return es una promesa,
// en caso de encontrar el miembro buscado, la promesa lo devuelve en resolve
// En caso de no encontrarlo, devuelve un mensaje de error en reject
const obtenerNombre = mascota => {
    return new Promise((resolve, reject) => {
        if (mascota.nombre == undefined)
            reject("Esta mascota no tiene nombre.");
        else
            resolve(mascota.nombre);
    });
};

const obtenerInstagram = mascota => {
    return new Promise((resolve, reject) => {
        if (mascota.instagram == undefined)
            reject("Esta mascota no tiene instagram.");
        else
            resolve(mascota.instagram);
    });
};

const obtenerFacebook = mascota => {
    return new Promise((resolve, reject) => {
        if (mascota.facebook == undefined)
            reject("Esta mascota no tiene facebook.");
        else
            resolve(mascota.facebook);
    });
}

// puedo anidar varios .then(callback).then(callback).then(callback) uno atrás del otro
// y al final de todos, agrego un .catch(callback)

// procedimiento explicado:

let mascotaBuscada = titina;

// llamo a obtenerNombre(), el cual devuelve una promesa, y uso un .then(callback) sobre esa promesa retornada,
// cuyo callback muestre el resultado de esa promesa, y un return a la siguiente función, obtenerFacebook
obtenerNombre(mascotaBuscada).then(resultado => {console.log(resultado);
                                                 return obtenerInstagram(mascotaBuscada);
                                                })
// cuando la función callback que está dentro del .then(callback) devuelve una promesa,
// todo el bloque obtenerNombre(mascotaBuscada).then(callback) se convierte en esa promesa retornada
// sobre esa nueva promesa, aplico un nuevo .then(callback) y repito el proceso cuantas veces necesite
.then(resultado => {console.log(resultado);
                    return obtenerFacebook(mascotaBuscada);
                   })
// repito el proceso:
.then(resultado => {console.log(resultado)
                   })
// al final de todos los .then() anidados, uso un catch() para gestionar el error obtenido en cualquiera
// de todas las promesas que fueron gestionadas y que podrían haber dado error
.catch(error => console.log(error));