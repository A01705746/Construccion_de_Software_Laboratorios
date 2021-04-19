const db = require('../util/database');

module.exports = class campeon {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        // personajes.push(this);
        // // Guardado en archivo txt
        // nuevos_personajes.push(this.nombre);
        // console.log("Campeones guardados en Nuevos Campeones.txt");
        // const filesystem = require('fs');
        // filesystem.writeFileSync('Nuevos Campeones.txt', nuevos_personajes.toString());
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM personajes');
    }
}