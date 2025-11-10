export abstract class Pessoa {  // Classe Abstrata

    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    // MÉTODOS AUXILIARES
    public visualizar(): void {
        console.log("***************************************");
        console.log("           Dados da Pessoa             ");
        console.log("***************************************");
        console.log("Nome da pessoa: ", this._nome);
    }

}