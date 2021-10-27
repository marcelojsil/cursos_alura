function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var number = parseInt(prompt("Qual número para a tabuada?"));
var tab = 1;

while (tab <= 10) {
    mostra(number * tab);
    tab = tab + 1;
}
mostra("Fim!");