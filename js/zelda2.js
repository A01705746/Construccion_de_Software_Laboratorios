// DOM: Document Object Model

function dar_espada(){
    console.log("Darle una espada a link");
    let espada = document.getElementById("espada");
    espada.innerHTML = "<li>Espada</li>";

    let boton = document.getElementById("acciones_link")
    boton.innerHTML = "¡A luchar!";
    boton.onclick = () => {
        console.log("A luchar!!!"); // Declara la función sin parámetros
    }
}