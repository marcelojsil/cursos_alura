function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaIMC(altura, peso) {
    return peso / (altura * altura);
}

var nome = prompt("Informe o seu nome.");
var altInformada = prompt("Informe a sua altura.");
var pesoInformado = prompt("Informe o seu peso.");

var imc = calculaIMC(altInformada, pesoInformado);

mostra(nome + ", o seu IMC é " + imc);

if(imc < 18.5) {
    mostra("O seu peso está abaixo do normal, procure um nutricionista para ajudá-lo!");
}
if(imc >= 35) {
    mostra("O seu peso está acima do normal, procure um especialista.");
}
if(imc >= 18.5 && imc < 35) {
    mostra("O seu peso está no ideal, mantenha o seu cuidado!");
}
