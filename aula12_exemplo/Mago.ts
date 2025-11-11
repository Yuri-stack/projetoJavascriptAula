import { IMaga } from "./IMaga";

export class Mago implements IMaga {

    public apresentar(texto: string): string {
        return texto
    }

    public invocar(): void {
        console.log("Com o meu poder a Nove Caudas eu invoco! 🎶")
    }

    public disparar(magia: string): void {
        console.log("Disparo " + magia)
    }

}