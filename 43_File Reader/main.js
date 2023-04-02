// FileReader es un objeto que se crea a partir del constructor FileReader()
// Permite trabajar con archivos

const reader = new FileReader();

// El objeto FileReader tiene varios miembros que, al principio, estarán inicializados con null
// Este objeto trabaja con ciertos eventos que cambiarán los valores de sus miembros
console.log(reader);

// El objeto FileReader tiene los siguientes métodos de interés:
// .readAsArrayBuffer()
// .readAsBinaryString()
// .readAsDataURL()
// .readAsText()

// los métodos de FileReader sirven para trabajar con archivos cargados en un input type="file"

// Primer ejemplo, con un input que está pensado para recibir un archivo de texto plano:
const inputPlainText = document.querySelector("#upload-plaintext");
const resultPlainText = document.querySelector("#result-plaintext");

inputPlainText.addEventListener("change", event => {
    // (el evento "change" se utiliza para detectar cambios en inputs de cualquier tipo)
    // el inputPlainText tiene una propiedad .files, que es un array con todos los archivos que se han cargado
    console.log(event.target.files[0]); // también se podría poner inputPlainText.files[0]
    
    // para leer el archivo, usamos el método .readAsText()
    reader.readAsText(event.target.files[0]);
    // se crea un listener para el evento "load" para ejecutar un algoritmo solo si el archivo cargó correctamente
    reader.addEventListener("load", event => {
        // se accede a los atributos .currentTarget.result para obtener el string con el texto dentro del archivo
        // si se tratara de un JSON, podríamos convertir la string con JSON.parse()
        resultPlainText.innerHTML = event.currentTarget.result;
    });
});

// Otro ejemplo, esta vez cargando una imagen:
const inputImage = document.querySelector("#upload-image");
const resultImage = document.querySelector("#result-image");

inputImage.addEventListener("change", event => {
    reader.readAsDataURL(event.target.files[0]);
    reader.addEventListener("load", event => {
        resultImage.setAttribute("src", event.currentTarget.result);
    });
});