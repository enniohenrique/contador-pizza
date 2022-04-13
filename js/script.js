function soma() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado) + 1;   
}

function subtrai() {
    if(document.getElementById('resultado').innerHTML > 0)
    {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado) - 1;  
    } 
    else {
        document.getElementById('resultado').innerHTML = "0";
    }
}
function clean() {
    document.getElementById('resultado').innerHTML = "0";
}