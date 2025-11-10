import { Atleta } from "./Atleta";

export class Ciclista extends Atleta {

    constructor(nome: string) {
        super(nome)
    }

    // IMPLEMENTAÇÃO DO MÉTODO ABSTRATO DA CLASSE MÃE
    public aquecer(): void {
        console.log("Fazendo alongamento...")
    }

    // MÉTODO PRÓPRIA DESSA CLASSE
    public pedalar(): void {
        console.log("Estou pedalando....")
    }

}