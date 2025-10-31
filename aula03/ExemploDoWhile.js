const leia = require("readline-sync");

let numero1, numero2, resultado;
let continua;

do {
    numero1 = leia.questionInt("Digite primeiro valor: ");

    numero2 = leia.questionInt("Digite segundo valor: ");

    resultado = numero1 + numero2;

    console.log("O resultado da soma é: " + resultado);

    console.log("\n++++++++++++++++MENU++++++++++++++++++");
    continua = leia.keyInYNStrict("\nDeseja continuar? "); // 
    console.log("++++++++++++++++++++++++++++++++++");
}

while (continua) 