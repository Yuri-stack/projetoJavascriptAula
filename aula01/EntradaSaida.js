// Importando a biblioteca
const leia = require('readline-sync')

// Declarando variaveis
let nome, distancia

// Entrada de Dados
console.log("Digite o seu nome: ")
nome = leia.question()

console.log("\nDigite a distância percorrida em sua corrida: ")
distancia = leia.questionFloat()

// Saída dos Dados
console.log("\nBom dia, " + nome + ". A distância percorrida foi de: " + distancia + "km.")
// console.log("\nA distância percorrida foi de: " + distancia)

// 6 inteiro
// 6.0 decimal
// 25.2