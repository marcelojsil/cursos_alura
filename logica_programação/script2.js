function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

/*var vitorias = document.getElementById(input1);
var empates = document.getElementById(input2);

var pontos = vitorias * 3 + empates;*/

var vitorias = parseInt(prompt("Entre com o número de vitórias."));
var empates = parseInt(prompt("Número de empates."));
var pontos = vitorias * 3 + empates
mostra("Os pontos do seu time são " + pontos);

if(pontos > 28) {
    mostra("Seu time está melhor que ano passado!")
}
if(pontos == 28) {
    mostra("Seu time está igual ao ano passado!")
}
if(pontos < 28) {
    mostra("Seu time está pior que ano passado!")
}

