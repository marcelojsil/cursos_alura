function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var contador = 2;

while(contador <= 100) {
    mostra(contador);
    contador = contador + 2;
}
mostra("Fim!");