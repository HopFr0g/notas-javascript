const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fundamentos de Programación",
        nota: 9
    },
    {
        nombre: "Álgebra Lineal",
        nota: 5
    },
    {
        nombre: "Cálculo I",
        nota: 6
    },
    {
        nombre: "Programación Orientada a Objetos",
        nota: 10
    },
    {
        nombre: "Ingeniería de Software I",
        nota: 8
    }
]

const obtenerMateria = id => {
    return new Promise((resolve, reject)=>{
        materiaSeleccionada = materias[id];
        if (materiaSeleccionada == undefined)
            reject("Materia inexistente");
        setTimeout(()=>{resolve(materiaSeleccionada)}, Math.random() * 300);
    })
}

const imprimirMaterias = async () => {
    let i = 0;
    let codigoHTML = "";
    for (let i = 0; i < materias.length; ++i) {
        let materia = await obtenerMateria(i);
        codigoHTML += `
            <div class="materia">
            <div class="materia-nombre">
                <h3 class="materia-nombre__h3">${materia["nombre"]}</h3>
            </div>
            <div class="materia-nota">
                <h3 class="materia-nota__h3 ${materia["nota"] >= 6 ? "aprobado" : "reprobado"}">${materia["nota"]}</h3>
            </div>
            </div>
        `;
    }
    materiasHTML.innerHTML = codigoHTML;
}

imprimirMaterias();