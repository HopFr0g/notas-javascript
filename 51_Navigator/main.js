// Se puede acceder a la siguiente información del navegador mediante el objeto navigator:

console.log(navigator.appCodeName);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.hardwareConcurrency);
console.log(navigator.language);
console.log(navigator.languages);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.userAgent);
console.log(navigator.cookieEnabled);
console.log(navigator.permissions);
console.log(navigator.platform);
console.log(navigator.plugins);
console.log(navigator.product);
console.log(navigator.serviceWorker);

// Y acceder a los siguientes métodos de navigator:
// .getUserMedia(); solicita permiso y devuelve el stream de multimedia asociado a la cámra o micrófono del dispositivo
// .registerContentHandler(); permite a los sitios web registrarse como posibles controladores de un tipo MIME determinado
// .registerProtocolHandler(); permite a los sitios web registrarse como posibles controladores de un protocolo determinado
// .requestMediaKeySystemAccess(); devuelve un objeto Promise para un objeto MediaKeySystemAccess
// .javaEnabled() devuelve un boolean que indica si el navegador tiene habilitado Java
// .sendBeaon() usado para transferir, de forma asíncrona, conjuntos pequeños de datos HTTP del agente usuario al servidor
// .vibrate() genera una vibración en el dispositivo