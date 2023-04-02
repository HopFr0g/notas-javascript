// PROBLEMA A (Lo resolví en una sola línea porque puedo):
window.confirm(`El ancho es de ${window.screen.width}px, el alto es de ${window.screen.height}px. ¿Deseas comprarla?`) ? alert("Computadora comprada con éxito") : alert ("Computadora rechazada.");

// PROBLEMA B:
document.write(`<b>protocolo:</b> ${window.location.protocol}`);
document.write(`<br><b>hostname:</b> ${window.location.hostname}`);
document.write(`<br><b>pathname:</b> ${window.location.pathname}`);
document.write(`<br><b>URL Completa:</b> ${window.location.href}`);