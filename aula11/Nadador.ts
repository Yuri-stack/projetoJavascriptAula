import { Atleta } from "./Atleta";

export class Nadador extends Atleta {

    constructor(nome: string) {
        super(nome)
    }

    // IMPLEMENTAÇÃO DO MÉTODO ABSTRATO DA CLASSE MÃE
    public aquecer(): void { // IMPLEMENTAR - APLICAR LÓGICA
        console.log("Estou fazendo Polichinelo....")
    }

    // MÉTODO ESPECIFICO/PROPRIO DA CLASSE NADADOR
    public nadar(): void {
        console.log("Estou nadando...")
    }

}