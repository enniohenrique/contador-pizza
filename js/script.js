function soma() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado) + 1;   
}

function subtrai() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado) - 1;   
}
function clean() {
    document.getElementById('resultado').innerHTML = "0";
}