import { Conta } from "./Conta"

export function main() {

    // INSTANCIA DA CLASSE CONTA
    // INTANCIAMENTO DE UM OBJETO
    const conta1: Conta = new Conta(12156, 108, 1, "Michelle", 10000000)

    console.log("Titular da Conta: " + conta1.titular)

    conta1.saldo = 15000000

    console.log("Saldo da Conta: " + conta1.saldo)

}

main()