const personajes = ["Ahri", "Akali", "Evelynn", "Sona"];
const nuevos_personajes = [];

module.exports = class campeon {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre) {
        this.nombre = nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        personajes.push(this.nombre);
        // Guardado en archivo txt
        nuevos_personajes.push(this.nombre);
        console.log("Campeones guardados en Nuevos Campeones.txt");
        const filesystem = require('fs');
        filesystem.writeFileSync('Nuevos Campeones.txt', nuevos_personajes.toString());
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return personajes;
    }

}