import { IGuerreira } from "./IGuerreira";

export class Guerreiro implements IGuerreira {

    apresentar(texto: string): string {
        return `${texto}`
    }

    atacar(ataque: string): void {
        console.log(`${ataque}`)
    }

}