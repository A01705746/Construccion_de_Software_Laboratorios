function problema6(){

    class calculadora{

        constructor(a, b){
            this.val1 = a;
            this.val2 = b;
        }

        suma(){
            let sum = Number(a) + Number(b);
            return sum;
        }

        resta(){
            let res = a - b;
            return res;
        }

        multiplicacion(){
            let mult = a * b;
            return mult;
        }

        division(){
            let div = a/b;
            return div;
        }

        potencia(){
            let pot = Math.pow(a, b);
            return pot;
        }

    }

    let a = prompt("Primer valor: ");
    let b = prompt("Segundo valor: ");

    let resultado = new calculadora(a, b);
    let status = true;

    while (status === true){
        let opciones = prompt("¿Qué deseas calcular?:\n1.-Suma\n2.-Resta\n3.-Multiplicación\n4.-División\n5.-Potencia\n\n");

        if (opciones == 1){
        alert(resultado.suma());
            status = false;
        }
        else if (opciones == 2){
        alert(resultado.resta());
            status = false;
        }
        else if (opciones == 3){
        alert(resultado.multiplicacion());
            status = false;
        }
        else if (opciones == 4){
        alert(resultado.division());
            status = false;
        }
        else if (opciones == 5){
        alert(resultado.potencia());
            status = false;
        }
        else{
        alert("Opción no válida")
        }
    }
    

}