console.log("Hola desde Node");

// fs: filesystem
const filesystem = require('fs');
filesystem.writeFileSync('Hola.txt', 'Hola desde Node');

// imprimir el arreglo en orden con código asínccrono
const arreglo = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

const http = require('http');

const server = http.createServer( (request, response) => {
    console.log("Hola desde el servidor");
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<html>");
    response.write("<head><title>Servidor Node</title></head>");
    response.write("<body><h1>Hola desde el servidor</h1></body>");
    response.write("</html>");
    response.end();
});

server.listen(3000)