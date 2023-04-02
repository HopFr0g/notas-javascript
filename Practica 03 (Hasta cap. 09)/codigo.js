// PROBLEMAS A Y B:

class Celular {
	constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam) {
		this.color = color;
		this.peso = peso;
		this.resolucionPantalla = resolucionPantalla;
		this.resolucionCamara = resolucionCamara;
		this.memoriaRam = memoriaRam;

		this.encendido = false;
	}
	presionarBotonPower() {
		this.encendido ? alert("Apagando...") : alert("Encendiendo...");
		this.encendido = !this.encendido;
	}
	reiniciar() {
		this.encendido ? alert("Reiniciando...") : alert("El celular está apagado, no se puede reiniciar");
	}
	tomarFoto() {
		alert(`Foto tomada en una resolución de ${this.resolucionCamara}px.`);
	}
	grabar() {
		alert(`Video tomado en una resolución de ${this.resolucionCamara}px.`);
	}
	mostrarInfo() {
		return `Celular color ${this.color} de ${this.peso}g, con una pantalla ${this.resolucionPantalla}p, cámara de ${this.resolucionCamara}px y ${this.memoriaRam}GB de memoria RAM`;
	}
}

class CelularAltaGama extends Celular {
	constructor(color, peso, resolucionPantalla, resolucionCamnara, memoriaRam, resolucionCamaraExtra) {
		super(color, peso, resolucionPantalla, resolucionCamnara, memoriaRam);
		this.resolucionCamaraExtra = resolucionCamaraExtra;
	}
	grabarVideoLento() {
		alert("Grabacion en camara lenta iniciada");
	}
	reconocerCara() {
		alert("Reconocimiento facial iniciado");
	}
	mostrarInfo() {
		return `${super.mostrarInfo()}. Resolución de la cámara extra: ${this.resolucionCamaraExtra}px.` 
	}
}

// Celulares comunes:

const celularSamsung = new Celular("azul", 100, 1080, 40, 4);
const celularXiaomi = new Celular("rojo", 120, 2160, 60, 8);
const celularMotorola = new Celular("negro", 200, 720, 20, 2);

celularSamsung.presionarBotonPower();
celularSamsung.tomarFoto();
celularSamsung.grabar();
celularSamsung.reiniciar();
celularSamsung.presionarBotonPower();

document.write("Info del celular Samsung: <b>" + celularSamsung.mostrarInfo() + "</b><br>");
document.write("Info del celular Xiaomi: <b>" + celularXiaomi.mostrarInfo() + "</b><br>");
document.write("Info del celular Motorola: <b>" + celularMotorola.mostrarInfo() + "</b><br>");

// Celular de alta gama:

const celularSamsungCaro = new CelularAltaGama("plata", 80, 2160, 80, 16, 40);

celularSamsungCaro.presionarBotonPower();
celularSamsungCaro.tomarFoto();
celularSamsungCaro.grabar();
celularSamsungCaro.reiniciar();
celularSamsungCaro.grabarVideoLento();
celularSamsungCaro.reconocerCara();
celularSamsungCaro.presionarBotonPower();

document.write("Info del celular Samsung caro: <b>" + celularSamsungCaro.mostrarInfo() + "</b><br>");