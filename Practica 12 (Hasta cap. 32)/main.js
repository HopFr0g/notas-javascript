document.querySelector(".boton-info").addEventListener("click", () => {
    imprimirInformacion();
});

const imprimirInformacion = async () => {
    const contenedorAprobados = document.querySelector(".contenedor-info__aprobados");
    const contenedorReprobados = document.querySelector(".contenedor-info__reprobados");
    try {    
        let peticion = await axios("universidad.json"); // Realizar esto dentro de un servidor local xampp
        let resultado = peticion.data;
        
        contenedorAprobados.innerHTML = "Aprobados: " + resultado[0].aprobados;
        contenedorAprobados.style.flexGrow = resultado[0].aprobados;
        
        contenedorReprobados.innerHTML = "Reprobados: " + resultado[0].reprobados;
        contenedorReprobados.style.flexGrow = resultado[0].reprobados;
    } catch (error) {
        contenedorAprobados.innerHTML = "Error al cargar API";
        contenedorReprobados.innerHTML = "Error al cargar API";
    }
}