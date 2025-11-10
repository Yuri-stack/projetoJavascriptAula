import { Estudante } from "./Estudante"

export function main() {

    const estudante: Estudante = new Estudante('Elisangela')

    // Método herdado de Pessoa
    estudante.visualizar()

    // Método própria de Estudante
    estudante.saudacao()

    // Método implementado através das Interfaces
    estudante.escrever()
    estudante.pintar()
}

main()