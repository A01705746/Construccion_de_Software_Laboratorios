function problema1(){
    let n = prompt("Ejercicio 1: Escribe un número: ");
    document.write("<strong>Ejercicio 1</strong>");
    document.write("<table><tbody><tr><th>Cuenta</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for(let i = 1; i <= n; i++){
        let sqr = Math.pow(i, 2);
        let cube = Math.pow(i, 3);

        document.write("<tr><td>" + i + "</td>"+ "<td>" + sqr + "</td>" + "<td>" + cube + "</td></tr>");
    }
    document.write("</table></tbody>");
}
problema1();
document.write("<button class='button' onclick='problema1()'>Probar otro</button><br><br>");

//-----------------------------------------------------------------------------------------

function problema2(){
    let numr1 = Math.floor(Math.random()*10);
    let numr2 = Math.floor(Math.random()*10);

    let inicio = new Date().getTime();
    let resp = prompt("Ejercicio 2: ¿Cuánto es " + numr1 + "+" + numr2 + "?")
    let fin = new Date().getTime();
    let tiempo = (fin - inicio)/1000;

    document.write("<br><strong>Ejercicio 2</strong><br><br>");

    if(resp == (numr1+numr2)){
        document.write("¡Correcto! Tardaste " + tiempo + " segundos.");
    }
    else{
        document.write("¡Incorrecto! Tardaste " + tiempo + " segundos.");
    }
}
problema2();
document.write("<br><br><button class='button' onclick='problema2()'>Probar otro</button><br><br>");

//-----------------------------------------------------------------------------------------

function problema3(){
    let elem_arreglo = prompt("Ejercicio 3: Número de elementos del arreglo: ")
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

    document.write("<br><strong>Ejercicio 3</strong><br><br>");
    document.write("Arreglo: " + arreglo + "<br>Número de negativos: " + neg + "<br>Número de ceros: " + zero + "<br>Número de positivos: " + positive);
}
problema3();
document.write("<br><br><button class='button' onclick='problema2()'>Probar otro</button><br><br>");

//-----------------------------------------------------------------------------------------

function problema4(){
    document.write("<br><strong>Ejercicio 4</strong><br><br>");
    let elem = prompt("Ejercicio 4: Elementos de cada renglón: ");
    let renglon = prompt("Ejercicio 4: Número de renglones: ");
    let matriz = [];

    while(renglon > 0){
        let arr = [];

        for (let i = 0; i < elem; i++){
            let num = Math.round(Math.random() * 10);
            arr.push(num);
        }
        document.write(arr + "<br>")
        matriz.push(arr);
        renglon--;
    }

    document.write("<br>");

    for (let i = 0; i < matriz.length; i++){
        let promedio = 0;
        let sum = 0;

        for(let j = 0; j < matriz[i].length; j++){
            let pos = matriz[i][j];
            sum = sum + pos;
        }

        let renglon_pos = i + 1;
        promedio = sum/elem;
        document.write("El promedio del renglon " + renglon_pos + " es " + promedio + "</br>")
    }
}
problema4();
document.write("<br><button class='button' onclick='problema2()'>Probar otro</button><br><br>");

//-----------------------------------------------------------------------------------------

function problema5(){
    document.write("<br><strong>Ejercicio 5</strong><br><br>");
    let numero = prompt("Ejercicio 5: Número a invertir: ");
    let inverso = "";

    for(let i = numero.length - 1; i >= 0; i --){
        inverso = inverso + numero[i];
    }

    document.write("Número dado: " +  numero + "<br>Número invertido: " + inverso);
}
problema5();
document.write("<br><br><button class='button' onclick='problema5()'>Probar otro</button><br><br>");