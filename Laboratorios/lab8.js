console.log("Laboratorio 8: Introducción al back-end\n");

// Una función que reciba un arreglo de números y devuelva su promedio.
function Ejercicio1(){
console.log("Ejercicio 1\n");
    const arreglo = [123, 65, 75, 84, 25, 97, 210, 6, 15, 31];
    let avg = 0;
    for (let item of arreglo) {
        avg = avg + item;
    }
    let res = avg/arreglo.length;
    console.log(arreglo, "\n");
    console.log("El promedio es ", res, "\n");
}
Ejercicio1();

// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
function Ejercicio2(){
    console.log("Ejercicio 2 en 'Lab 8 - Ejercicio 2.txt'\n");
    const filesystem = require('fs');
    const prompt = require('prompt-sync')();
    let texto = prompt("Texto a guardar en archivo: ");
    filesystem.writeFileSync('Lab 8 - Ejercicio 2.txt', texto);
}
Ejercicio2();

// Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
// Devuelve el número de negativos, ceros y positivos del arreglo
function Ejercicio3(){
    const prompt = require('prompt-sync')();
    let elem_arreglo = prompt("\nEjercicio 3: Número de elementos del arreglo: ")
    const arreglo = [];
    let neg = 0;
    let zero = 0;
    let positive = 0;

    for(let i = 0; i < elem_arreglo; i++){
        arreglo[i] = Math.round(Math.random() * 10 - 5);
    }

    for(let i = 0; i < arreglo.length; i++){

        if(arreglo[i] == 0){
            zero++;
        }

        if(arreglo[i] < 0){
            neg++;
        }

        if(arreglo[i] > 0){
            positive++;
        }
    }

    console.log("\nArreglo: " + arreglo + "\nNúmero de negativos: " + neg + "\nNúmero de ceros: " + zero + "\nNúmero de positivos: " + positive + "\n");
}
Ejercicio3();

// Crea una pequeña aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios. 
function fun(){

    const express = require("express")
    const app = express()

    app.get('/', (request, response, next) => {
        response.sendFile(__dirname + "/lab6.html")
    })

    app.listen(3000, () =>{
        console.log("Inicio del servidor");
    })

}

fun();