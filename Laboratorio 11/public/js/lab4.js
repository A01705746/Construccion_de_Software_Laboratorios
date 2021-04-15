function problema1(){
    let n = 4;
    document.write("<strong>Ejercicio 1</strong><br><br>");
    document.write("Ejercicio 1: Escribe un número: ", n);
    document.write("<table><tbody><tr><th>Cuenta</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for(let i = 1; i <= n; i++){
        let sqr = Math.pow(i, 2);
        let cube = Math.pow(i, 3);

        document.write("<tr><td>" + i + "</td>"+ "<td>" + sqr + "</td>" + "<td>" + cube + "</td></tr>");
    }
    document.write("</table></tbody>");
}
problema1();

//-----------------------------------------------------------------------------------------

function problema2(){
    let numr1 = Math.floor(Math.random()*10);
    let numr2 = Math.floor(Math.random()*10);

    let inicio = new Date().getTime();
    let resp = 4;
    let fin = new Date().getTime();
    let tiempo = (fin - inicio)/1000;

    document.write("<br><strong>Ejercicio 2</strong><br><br>");
    document.write("Ejercicio 2: ¿Cuánto es " + numr1 + "+" + numr2 + "?");


    if(resp == (numr1+numr2)){
        document.write("¡Correcto! Tardaste " + tiempo + " segundos.");
    }
    else{
        document.write("¡Incorrecto! Tardaste " + tiempo + " segundos.");
    }
}
problema2();

//-----------------------------------------------------------------------------------------

function problema3(){
    let elem_arreglo = 4;
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

//-----------------------------------------------------------------------------------------

function problema4(){
    document.write("<br><strong>Ejercicio 4</strong><br><br>");
    let elem = 4;
    let renglon = 4;
    let matriz = [];

    document.write("Ejercicio 4: Elementos de cada renglón: ", elem, "<br>");
    document.write("Ejercicio 4: Número de renglones: ", renglon, "<br>");

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

//-----------------------------------------------------------------------------------------

function problema5(){
    document.write("<br><strong>Ejercicio 5</strong><br><br>");
    let numero = 456;
    let inverso = "";

    document.write("Ejercicio 5: Número a invertir: ", numero, "<br>");

    for(let i = numero.length - 1; i >= 0; i --){
        inverso = inverso + numero[i];
    }

    document.write("Número dado: " +  numero + "<br>Número invertido: " + inverso);
}
problema5();