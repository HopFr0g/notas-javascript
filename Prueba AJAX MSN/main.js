let peticionGet = new XMLHttpRequest();
peticionGet.open("GET", "https://ws.smn.gob.ar/map_items/weather");
peticionGet.send();
peticionGet.addEventListener("load", ()=>{
    if (peticionGet.status == 200 || peticionGet.status == 201)
        console.log(peticionGet.response);
});