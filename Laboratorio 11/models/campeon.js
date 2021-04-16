const personajes = [{nombre: "Ahri", imagen: "https://i.pinimg.com/originals/04/dc/b8/04dcb89e227620656fd0bf8fc2055ac4.jpg"},
{nombre: "Akali", imagen: "https://a-static.besthdwallpaper.com/cazador-akali-league-of-legends-lol-papel-pintado-2880x1620-65757_52.jpg"},
{nombre: "Evelynn", imagen: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg"},
{nombre: "Sona", imagen: "http://pm1.narvii.com/6523/df35d0778a9cd3ddceb88135e5a532512deadb12_00.jpg"}];
const nuevos_personajes = [];

module.exports = class campeon {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        personajes.push(this);
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