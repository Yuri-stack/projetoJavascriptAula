export class Conta {

    // ATRIBUTOS DA CLASSE
    private _numero: number     // private indica que o atributo só acessivel dentro da Classe
    private _agencia: number
    private _tipo: number
    private _titular: string
    private _saldo: number

    // MÉTODO CONSTRUTOR
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero   // this => Conta => Conta.numero
        this._agencia = agencia
        this._tipo = tipo
        this._titular = titular
        this._saldo = saldo
    }

    // MÉTODOS DE ACESSO - GET e o SET -> GETTERS E SETTERS
    public set numero(novoValor: number) {  // SET -> atualizar de f. segura, os atributos
        this._numero = novoValor
    }

    public get numero() {   // GET -> recupera/mostra de f. segura o valor do atributo
        return this._numero
    }

    public get agencia() {
        return this._agencia;
    }

    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular() {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }
}