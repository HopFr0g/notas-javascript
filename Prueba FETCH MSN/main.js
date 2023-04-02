let peticionGet = fetch("https://ws.smn.gob.ar/map_items/weather");

peticionGet.then(respuesta => respuesta.json()).then(respuesta => console.log(respuesta));