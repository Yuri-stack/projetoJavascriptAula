import readline = require("readline-sync");
import { validarIdade } from "./Funcoes";

export function main() {
    try {

        let idade: number = readline.questionFloat("Digite a idade da Pessoa: ")
        validarIdade(idade)

    } catch (error) {
        console.error("Mensagem: " + error)
    }
}

main()