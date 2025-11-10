import { IEscritor } from "./IEscritor";
import { IPintor } from "./IPintor";
import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa implements IEscritor, IPintor {

    // Atributos
    // poderia ter atributos para essa classe especifica

    // Construtor
    constructor(nome: string) {
        super(nome)
    }

    // Métodos de Acesso
    // poderia ter os métodos de acesso para essa classe especifica

    // Métodos de Auxiliares
    public saudacao(): void {
        console.log("Olá, meu nome é " + this.nome)
    }

    public escrever(): void {
        console.log("Escrevendo com o computador...")
    }

    public pintar(): void {
        console.log("Pintando com Giz de Cera...")
    }

}