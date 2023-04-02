// CRUD: CREATE, READ, UPDATE, DELETE

// IndexedDB es una base de datos indexada que almacena información en el navegador (LOCAL)
// Es orientada a objetos
// Es asíncrona (en tiempo real, no hace falta recargar la página)
// Trabaja con eventos del DOM

// Es lo mismo window.indexedDB que simplemente indexedDB
// Se usa el método .open("nombre", versión) para abrir una base de datos o crearla si no existe
const IDBRequest = indexedDB.open("database", 1);

// La variable IDBRequest aquí creada es la solicitud
// Se accede al resultado con IDBRequest.result

// El evento "upgradeneeded" ocurre si la base no existía y tuvo que ser creada
IDBRequest.addEventListener("upgradeneeded", () => {
    console.log("La DB debió ser creada porque no existía");
});

// El evento "success" ocurre si la base se ha abierto correctamente
IDBRequest.addEventListener("success", () => {
    console.log("DB Abierta con éxito");
});

// El evento "error" ocurre si la base no se pudo abrir
IDBRequest.addEventListener("error", () => {
    console.log("Error. No se pudo abrir DB");
});

// El almacén de objetos es el lugar de la IndexedDB donde guardaremos los objetos:
// Los almacenes de objetos solamente se pueden crear cuando creamos la DB (evento upgradeneeded)
IDBRequest.addEventListener("upgradeneeded", () => {
    // Accedo al resultado de la base de datos:
    const db = IDBRequest.result;
    // Uso el método .createObjectStore() para crear un almacen de objetos:
    db.createObjectStore("apellidos", {
        autoIncrement: true // Este campo hace que los ID de cada dato creado sea único
        // También se podría usar "keyPath", el cual nos pedirá un ID único junto a cada dato
    });
});

// Agregar objeto a la base de datos:
const agregarObjeto = objeto => {
    const db = IDBRequest.result;
    
    // El resultado de una IDBRequest tiene un método .transaction("nombre", "readwrite/readonly")
    // El método sirve para abrir una transacción, la cual nos da permiso de editar la base de datos seleccionada
    const IDBTransaction = db.transaction("apellidos", "readwrite");
    // Con el método .objectStore("nombre del almacén de objetos") seleccionamos sobre
    // qué almacén de objetos realizaremos la transacción deseada
    const objectStore = IDBTransaction.objectStore("apellidos");
    // Con el método .add(objeto) añadimos el objeto deseado:
    objectStore.add(objeto);
    // Usamos el event listener "complete" para comprobar si el objeto se agregó correctamente:
    IDBTransaction.addEventListener("complete", () => {
        console.log("Objeto agregado correctamente");
    });
}

// Prueba poner, en la terminal del navegador, agregarObjeto({apellido: "Otamendi"})

// Leer todos los objetos almacenados en la base de datos:
const leerObjetos = () => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("apellidos", "readonly");
    const objectStore = IDBTransaction.objectStore("apellidos");
    const cursor = objectStore.openCursor();
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            console.log(cursor.result.value);
            cursor.result.continue();
        } else {
            // El cursor, SIEMPRE, se ejecutará una vez siendo nulo, por eso entrará al else luego de leer todos los datos
            console.log("Todos los datos fueron leídos");
        }
    });
}

// Prueba poner, en la terminal del navegador, leerObjetos()

// Modificar objetos:
const modificarObjeto = (key, objeto) => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("apellidos", "readwrite");
    const objectStore = IDBTransaction.objectStore("apellidos");
    objectStore.put(objeto, key);
    IDBTransaction.addEventListener("complete", () => {
        console.log("Objeto modificado correctamente");
    });
}

// Prueba poner, en la terminal del navegador, modificarObjeto(2, {apellido: "Tagliafico"}) 

// Eliminar objetos:
const eliminarObjeto = key => {
    const db = IDBRequest.result;
    const IDBTransaction = db.transaction("apellidos", "readwrite");
    const objectStore = IDBTransaction.objectStore("apellidos");
    objectStore.delete(key);
    IDBTransaction.addEventListener("complete", () => {
        console.log("Objeto modificado correctamente");
    });
}

// Prueba poner, en la terminal del navegador, eliminarObjeto(2);