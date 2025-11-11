import { Guerreiro } from "./Guerreiro"
import { Mago } from "./Mago"
import { Necromante } from "./Necromante"

export function main() {

    const mago: Mago = new Mago()
    const guerreiro: Guerreiro = new Guerreiro()
    const necro: Necromante = new Necromante()

    mago.apresentar("Contemplem o Magoooo! Com seus poderes.... INCRÍVEIS PODERES!!!!!!")
    mago.invocar()
    mago.disparar("Vazio Roxo Irrestrito!")

    console.log("")
    console.log("")

    guerreiro.apresentar("Eu sou Levi, da Tropa de Exploração")
    console.log(guerreiro.atacar("Eu derrubo os Titãs com as minhas lâminas"))

    console.log("")
    console.log("")

    necro.apresentar("Eu sou Sung Jin Woo")
    necro.atacar("Uso as minhas adagas contra o Rei Formiga")
    necro.invocar()
    necro.disparar()

}

main()