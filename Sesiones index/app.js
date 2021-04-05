console.log("Hola desde Node");

// fs: filesystem
const filesystem = require('fs');

filesystem.writeFileSync('Hola.txt', 'Hola desde Node');

const arreglo = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
    
}