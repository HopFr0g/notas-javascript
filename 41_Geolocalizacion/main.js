let geolocalizacion = navigator.geolocation;

// geolocation es un miembro del objeto navigator, y tiene los siguientes métodos:

// .getCurrentPosition(successCallback, errorCallback, optionsObject)
// Sus parámetros son callbacks (funciones) donde definiremos qué se hará en cada caso: si todo salió bien, si hubo un error, o si queremos cambiar las opciones (este último es un objeto y no un callback) 

geolocalizacion.getCurrentPosition(

// Dentro del successCallback recibiremos un parámetro, el cuál nos servirá para ver la ubicación encontrada
(position) => {
    console.log("Posición encontrada con éxito: ", position);
},

// Dentro del errorCallback definiremos cómo actual en caso de error:
(error) => {
    console.log("Error al acceder a la ubicación: ", error);
},

// Dentro del objeto options, podemos definir:
{
    maximunAge: 0, // define cuánto tiempo (milisegundos) debe almacenarse la ubicación en caché hasta actualizarse nuevamente
    timeout: 3000, // tiempo (milisegundos) antes del timeout
    enableHighAccuracy: true // habilita la alta precisión (aprovecha todos los recursos de posicionamiento)
}

);