function validar(){
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if(password1 == password2){
        if(password1 == ""){
            alert("Campos vacíos");
        }
        else{
            document.getElementById("resultado").innerHTML = "Contraseña validada";
            document.getElementById("estilo1").style.fontStyle = "italic";
            document.getElementById("estilo1").style.color = "green";
            document.getElementById("estilo2").style.fontStyle = "italic";
            document.getElementById("estilo2").style.color = "green";
        }
        
    }
    else{
        document.getElementById("resultado").innerHTML = "Las contraseñas no coinciden";
        document.getElementById("estilo1").style.fontStyle = "italic";
        document.getElementById("estilo1").style.color = "red";
        document.getElementById("estilo2").style.fontStyle = "italic";
        document.getElementById("estilo2").style.color = "red";
    }
}