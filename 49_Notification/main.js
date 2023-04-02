// Notification: API que nos permite enviar notificaciones

// Comprobar si el navegador soporta notificaciones:
if (! "Notification" in window)
    console.log("Las notificaciones no son soportadas por tu navegador");

// Las notificaciones tienen tres estados:
// default: es cuando el navegador pregunta al usuario si desea permitir las notificaciones
// granted: cuando el usuario permitió las notificaciones
// denied: cuando el usuario bloqueó las notificaciones
Notification.requestPermission(() => {
    // Me entero de los permisos que dio el usuario con el atributo "Notification.permission"
    if (Notification.permission == "granted")
        document.write("Gracias por permitir las notificaciones");
    // Para enviar una nueva notificación, creo una instancia de Notification("notificación")
    // No hace falta asignarla a una nueva variable
    new Notification("Hola");
});