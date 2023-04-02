// POO: Paradigma de programación donde los elementos son vistos como objetos con un conjunto de propiedades (llamados atributos) y funciones (llamados métodos).
// Los objetos deben instanciarse (crearse) a partir de una clase. La clase es el "molde" donde se definen los atributos y métodos que tendrán sus objetos.

// Las clases se crean con la palabra reservada "class" de esta forma:

class Animal {
	// El constructor es un método especial que se ejecuta automáticamente al instanciar la clase (es decir, cada vez que creamos un nuevo objeto):
	constructor(especieAnimal, edadAnimal, colorAnimal) {
		// con "this" hago referencia a un objeto que pertenece a esta misma clase. Por ejemplo, para hacer referencia al atributo "especie" que tienen los objetos de clase animal, uso this.especie
		// quiero que la clase animal tenga los siguientes tres atributos:
		this.especie = especieAnimal;
		this.edad = edadAnimal;
		this.color = colorAnimal;
	}

	// Aquí voy a crear un método (una función) que podrá ejecutarse con los objetos de clase animal:
	// Los métodos no pueden ser funciones flecha
	verInformacion() {
		return `especie: ${this.especie}, edad: ${this.edad} año(s), color: ${this.color}`;
	}
}

// Crear el primer objeto de la clase animal (se deben declarar con "const" en vez de "let")
// El operador new se usa para instanciar un objeto (crea un nuevo objeto a partir de la clase que especifiquemos)

const lulu = new Animal("gato", 14, "naranja");

// Para acceder a un atributo o método de un objeto, se utiliza un punto:

document.write("Lulu es de especie " + lulu.especie);
document.write("<br>");
document.write("Ficha técnica de Lulu: " + lulu.verInformacion());
document.write("<br>")

// Características de la POO (no las explico porque ya las sé):
// abstracción, modularidad, encapsulamiento, polimorfismo.

// Herencia: crear una clase (llamada sub-clase, clase hija o especialización) a partir de una clase más general (llamada super-clase, clase madre o generalización):
// por ejemplo, la clase "perro" debe heredar de "animal" pues perro ES UN animal
// para la herencia se usa la palabra reservada "extends"

class Perro extends Animal {
	constructor(edad, color, raza) {
		// para llamar al constructor de la super-clase uso la función super()
		super("perro", edad, color);
		// puedo usar la palabra super para llamar a cualquier otro metodo de la super-clase. Por ejemplo super.verInformacion()

		// ahora defino otros atributos propios de la clase perro:
		this.raza = raza;
	}

	// puedo crear un método que ya exista en la super-clase, pero que tenga un comportamiento específico para esta clase:
	verInformacion() { 
		return `especie: ${this.especie}, raza: ${this.raza}, edad: ${this.edad} año(s), color: ${this.color}`;
	}

	// Los métodos "static" dentro de una clase, son funciones que se pueden llamar sin la necesidad de instanciar la clase (no se necesita un objeto):
	static ladrar() {
		alert("¡Guau!");
	}

	// setters y getters: permiten dar un nuevo valor a una propiedad del objeto de esta clase (set) u obtener el valor actual (get)
	set setRaza(nuevaRaza) {
		this.raza = nuevaRaza;
	}
	get getRaza() {
		return this.raza;
	}
}

// ahora instanciaré (crearé) un objeto de la clase perro:
const snoopy = new Perro(71, "blanco", "común");

// De la siguiente forma llamo a un método estático de la clase Perro:
Perro.ladrar();

// Raramente, el setter funciona como una propiedad y no como un método, por eso el nuevo valor se pasa con el signo = y no como si fuera un (parametro)
snoopy.setRaza = "Beagle";
// lo mismo pasa si quisiera usar snoopy.getRaza, no debo poner (parámetros)

document.write("Informacion de Snoopy: " + snoopy.verInformacion());