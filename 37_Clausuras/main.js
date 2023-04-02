// Clausuras: son funciones que devuelven otra función.
// De ese modo, puedo llamar a la función exterior con el parámetro deseado
// y luego almacenar la función retornada en una variable.
// Cuando desee hacer el llamado a la función, solo debo usar la variable en donde lo guardé.

const changeSize = size => {
    return () => {document.querySelector(".text").style.fontSize = size + "px"}
}

const smallSize = changeSize(12);
const mediumSize = changeSize(20);
const bigSize = changeSize(48);

document.querySelector(".small").addEventListener("click", smallSize);
document.querySelector(".medium").addEventListener("click", mediumSize);
document.querySelector(".big").addEventListener("click", bigSize);