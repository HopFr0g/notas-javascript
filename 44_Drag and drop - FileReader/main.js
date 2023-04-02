const zonaArrastre = document.querySelector(".zona-arrastre");

zonaArrastre.addEventListener("dragover", event => {
    event.preventDefault();
    zonaArrastre.setAttribute("style", "background: #888");
});

zonaArrastre.addEventListener("dragleave", event => {
    event.preventDefault();
    zonaArrastre.removeAttribute("style");
});

zonaArrastre.addEventListener("drop", event => {
    event.preventDefault();
    zonaArrastre.removeAttribute("style");
    
    subirImagen(event.dataTransfer.files[0])
});

const subirImagen = archivo => {
    const reader = new FileReader();
    
    reader.readAsDataURL(archivo);
    
    // PORCENTAJE DE CARGA:
    reader.addEventListener("progress", event => {
        console.log(event.loaded / archivo.size * 100);
    });
    
    reader.addEventListener("load", event => {
        document.querySelector(".imagen-subida").setAttribute("src", event.currentTarget.result);
    });
}