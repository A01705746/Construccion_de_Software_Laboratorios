const personajes = ["Ahri", "Akali", "Evelynn", "Sona"];
const nuevos_personajes = [];

const requestHandler = (request, response) => {
    console.log("Hola desde el servidor");
    console.log(request.url);

    if (request.url === "/campeones"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor Node</title></head>');
        response.write("<body><h1>Campeones</h1></body>");
        if (personajes.length == 0){
            response.write("<h2>Los campeones se han ido a la grieta</h2>");
        } else {
            response.write("<ul>");
            for (let personaje of personajes){
                response.write("<li>");
                response.write(personaje);
                response.write("</li>");
            }
            response.write("<ul>");
        }
        response.write("</html>");
        response.end();
    } else if(request.url == "/nuevo-campeon" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor Node</title></head>');
        response.write("<body><h1>Agrega un campeón</h1>");
        response.write('<form action="nuevo-campeon" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar campeón"></form>');
        response.write("</body>");
        response.write("</html>");
        response.end();
    } else if(request.url == "/nuevo-campeon" && request.method === "POST"){
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_personaje = datos_completos.split('=')[1];
            personajes.push(nuevo_personaje);
            nuevos_personajes.push(nuevo_personaje);
            console.log(nuevo_personaje);
            console.log(personajes);

            console.log("Campeones guardados en Campeones.txt");
            const filesystem = require('fs');
            filesystem.writeFileSync('Nuevos Campeones.txt', nuevos_personajes.toString());

            return response.end();
        });
    } else if(request.url === "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Servidor Node</title></head>');
        response.write("<body><h1>League of Legends</h1></body>");
        response.write("</html>");
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Página no encontrada</title></head>');
        response.write("<body><h1>Parece que un poro se ha comido la página.</h1></body>");
        response.write("</html>");
        response.end();
    }
}

module.exports = requestHandler;