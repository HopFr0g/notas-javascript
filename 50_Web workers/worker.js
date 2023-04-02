const ejecutarBucle = () => {
    for (let i = 0; i < 10000; ++i)
        console.log("Bucle infinito");
}

addEventListener("message", event => {
    if (event.data == "bucle")
        ejecutarBucle();
});