/* PRECIOS:
- $800 1 kg de helado
- $500 1/2 kg de helado
- $300 1/4 kg de helado
- $200 Cono de helado
- $200 Palito bombón
- $100 Palito de crema
- $60 Palito de agua */

let dinero = parseInt(prompt("Ingrese su dinero: $"));

document.write(`<h1>Tienes $${dinero}</h1>`);

if (dinero >= 800) {
	document.write("<h2>El helado mas caro a tu alcance es: 1 kg de helado</h2>");
	document.write(`<h3>Tu vuelto sería: $${dinero - 800}</h3>`);
} else if (dinero >= 500) {
	document.write("<h2>El helado mas caro a tu alcance es: 1/2 kg de helado</h2>");
	document.write(`<h3>Tu vuelto sería: $${dinero - 500}</h3>`);
} else if (dinero >= 300) {
	document.write("<h2>El helado mas caro a tu alcance es: 1/4 kg de helado</h2>");
	document.write(`<h3>Tu vuelto sería: $${dinero - 300}</h3>`);
} else if (dinero >= 200) {
	document.write("<h2>El helado mas caro a tu alcance es: cono de helado o palito bombón</h2>");
	document.write(`<h3>Tu vuelto sería: $${dinero - 200}</h3>`);
} else if (dinero >= 100) {
	document.write("<h2>El helado mas caro a tu alcance es: palito de crema</h2>");
	document.write(`<h3>Tu vuelto sería: $${dinero - 100}</h3>`);
} else if (dinero >= 60) {
	document.write("<h2>El helado mas caro a tu alcance es: palito de agua</h2>");
	document.write(`<h3>Tu vuelto sería: $${dinero - 60}</h3>`);
} else {
	document.write("<h2>Lo siento, no tienes ningun helado a tu alcance. El más barato cuesta $60</h2>");
}