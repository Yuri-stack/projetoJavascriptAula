const leia = require("readline-sync");

let nome, contador

for (contador = 1; contador <= 3; contador++) { // operador incremento | contador = contador + 1

    nome = leia.question("Digite um nome: ");
    console.log("O " + contador + "º nome digitado foi: " + nome);

}

console.log(contador)