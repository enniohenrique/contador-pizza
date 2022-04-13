/* Função para aumentar o contador de pizzas */
function soma() {
    var resultado = document.getElementById('resultado').innerHTML; /* Pegando o valor que está dentro do id 'resultado do html */
    document.getElementById('resultado').innerHTML = eval(resultado) + 1;   
}

/* Função para diminui o contador de pizzas */
function subtrai() {
    /* Se o contador for maior que 0, pode diminui. Caso contrário, o valor vai continuar em 0, pois se não ficaria negativo */
    if(document.getElementById('resultado').innerHTML > 0)
        {
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = eval(resultado) - 1;
    } 
    else {
        document.getElementById('resultado').innerHTML = "0";
    }
}

/* Função para limpar o contador de pizzas */
function clean() {
    document.getElementById('resultado').innerHTML = "0";
}