// Javascript es un lenguaje orientado a objetos basado en prototipos
// Esto significa que, en lugar de crear objetos instanciando clases, se crean a partir de otros objetos

// Se accede al prototipo de un objeto con su miembro __proto__
// Todos los objetos tienen el __proto__: object (es el prototipo padre)

// En general, un dato tiene dos prototipos:
// Uno es el tipo de dato (Por ejemplo String, Number) y otro es el prototipo Object

// Con el miembro .__proto__ se accede a prototipos que ya están creados
// Con el miembro .prototype se accede a prototipos que nosotros creamos

// Características:
// Los prototipos definidos en el código fuente (creados por nosotros) son mutables (se pueden modificar)
// Los prototipos son objetos y ocupan espacio en memoria
// Puede verse como un modelo ejemplar de la familia objeto
// Un objeto hereda propiedades (valores y métodos) de su prototipo
// Por ejemplo: los métodos de un string o array están definidos en su __proto__

// Cuando se crea una clase con class {}, la definición de la clase (métodos y atributos)
//estará presente en el miembro __proto__ de los objetos que sean una instancia de esa clase

class Persona {
    constructor() {}
    saludar() { console.log("Hola"); }
}

let leonel = new Persona;

// Puedo modificar un método desde afuera
// Pero si accedo al __proto__, veré que el método sigue teniendo la misma definición:
leonel.saludar = () => { console.log("Hola!!!!")}

// Así que también puedo modificar el método desde adentro del prototipo:
leonel.__proto__.saludar = () => { console.log("Cómo estás?") }