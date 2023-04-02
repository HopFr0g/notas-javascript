// Gestionar la promesa devuelta por fetch para comprobar si hubo errores:

const gestionarPromesaFetch = async () => {
    let peticionPromesa = await fetch("https://reqres.in/api/users/2"); // La petición devuelta por fetch, es una promesa encapsulada
    let peticionResultado = await peticionPromesa.json(); // Luego de obtener la promesa encapsulada con fetch, debo usar un método como .json() para acceder al resultado
    
    console.log(peticionResultado);
}

gestionarPromesaFetch();

const gestionarPromesaAxios = async () => {
    let peticionResultado = await axios("https://reqres.in/api/users/2");
    
    console.log(peticionResultado.data);
}

gestionarPromesaAxios();