import { logar, somar, transformarNumeroCincoEmTexto } from "./Exemplo1"

// CHAMADA DAS FUNÇÕES
let valor: number = somar(7, 12)
let valor1: number = somar(6, 11)

let login: string | number = "roberta@generation"

console.log("O resultado da sua adição é: " + valor)
console.log("O resultado da sua adição é: " + valor1)

logar(login)

let numeroEmTexto: string = transformarNumeroCincoEmTexto(6)
console.log(numeroEmTexto)