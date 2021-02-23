// DOM: Document Object Model

function dar_espada(){
    console.log("Darle una espada a link");
    let espada = document.getElementById("espada");
    espada.innerHTML = "<li>Espada</li>";

    let boton = document.getElementById("acciones_link")
    boton.innerHTML = "¡A luchar!";
    boton.onclick = () => {
        console.log("A luchar!!!"); // Declara la función sin parámetros
        let imagen = document.getElementById("link_luchando");
        imagen.innerHTML = '<img alt="Gif retro animado de Link luchando" src="https://steemitimages.com/p/2gsjgna1uruvUuS7ndh9YqVwYGPLVszbFLwwpAYXZoZbh6aBvoQj9NjW3onDQDqG6HHpeWNewo4T2z9RXPgLvmtFM43hgQp5anwL7oY84nBZhwY81s?format=match&mode=fit">';
    }
}