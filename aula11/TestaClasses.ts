import { Atleta } from "./Atleta"
import { Ciclista } from "./Ciclista"
import { Nadador } from "./Nadador"

export function main() {

    // OBJETO DA CLASSE NADADOR
    const nadador: Nadador = new Nadador('Thompson')
    const ciclista: Ciclista = new Ciclista('Israel')

    // INSTACIAR A CLASSE ATLETA NÃO É POSSÍVEL POIS É ABSTRATA
    // const atleta: Atleta = new Atleta('Natália')

    nadador.visualizar()
    nadador.aquecer()
    nadador.nadar()
    console.log(" ")

    console.log(" ")
    ciclista.pedalar()
    ciclista.visualizar()
    ciclista.aquecer()

}

main()