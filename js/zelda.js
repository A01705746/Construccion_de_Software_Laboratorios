// Declaramos constantes con const
const edad_link = 17;

// Declaramos variables con let
let arma_link = "Espada maestra";

console.log(edad_link);
console.info(arma_link);

let estatura = 1.58;
console.error(estatura);

let color_ropa = "verde";
console.warn(color_ropa);

for (let i = 0; i < 10; i++){
    console.log(i);
}

//console.log(i); Log ya no existe porque se declaró dentro del ciclo for

// Para escribir el html
document.write("<h3>" + arma_link + "</h3>");

alert("¡Hola mundo!");

const nombre = prompt("¿Cómo te llamas?");
document.write("Hola " + nombre);

// Declarar funciones tradicionalmente
function pregunta_hambre() {
    const respuesta = confirm("¿Tienes hambre?");

    if (respuesta === true) {
        document.write("<h3>¡Pide una pizza rápido!</h3>");
    }
    else{
        document.write("Ponte a programar");
    }
}

pregunta_hambre();