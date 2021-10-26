function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numPensado = Math.round(Math.random() * 10); //gera um número aleatório, arredonda ele e multiplica por 10, trazendo um número de 0 a 10.

console.log(numPensado);

var chute = parseInt(prompt("Informe o seu chute!"));

if(chute == numPensado) {
    mostra("Parabéns, você acertou!");
} else { mostra("Hahaha, você errou!, o número pensado foi " + numPensado);
}