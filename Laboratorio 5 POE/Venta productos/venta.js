function carrito(){
    let xbox = document.getElementById("xbox");
    let ahri = document.getElementById("ahri");
    let akali = document.getElementById("akali");

    let n_xbox = xbox.value * 20990;
    let n_ahri = ahri.value * 1535;
    let n_akali = akali.value * 1740;
    let total = n_xbox + n_ahri + n_akali;

    let resumen = document.getElementById("resumen");
    resumen.innerHTML = '<div class="card2"><h2>Total: $' + total + '<br>IVA: $' + (total * .16) + '</h2></div>';
}