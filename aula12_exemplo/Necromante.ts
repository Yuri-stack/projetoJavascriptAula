import { IGuerreira } from "./IGuerreira";
import { IMaga } from "./IMaga";

export class Necromante implements IMaga, IGuerreira {

    public apresentar(texto: string): string {
        return texto
    }

    invocar(): void {
        console.log("Erga-se")
    }

    disparar(): void {
        console.log("Domínio do Monarca")
    }

    atacar(ataque: string): void {
        console.log(ataque)
    }

}