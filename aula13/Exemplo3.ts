import readline = require("readline-sync");
import { dividir } from "./Funcoes";
import { ExcecaoSimples } from "./exceptions/ExcecaoSimples";

export function main() {

    let resultado: number | null;

    try {
        let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
        let numero2: number = readline.questionFloat("Digite o segundo numero: ");

        resultado = dividir(numero1, numero2);

        console.log("O Resultado da divisão é: " + resultado);

    } catch (error) {
        if (error instanceof ExcecaoSimples) {
            console.error(error)
        } else {
            console.error("Erro!")
        }
    }
}

main()