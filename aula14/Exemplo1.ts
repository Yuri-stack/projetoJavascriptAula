export function main() {

    let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log("Exibir os itens\n");

    // Exibir os itens da Lista sem Arrow Functions

    // for (let numero of numeros) {
    //     console.log(numero);
    // }

    // numeros.forEach(function (numero: number) {
    //     console.log(numero)
    // })   // for.. Each => para... cada

    // Exibir os itens da Lista com Arrow Functions
    numeros.forEach(numero => console.log(numero))

    console.log("\nExibir os itens somados com eles mesmos\n");

    // Exibir os itens da Lista dobrados sem Arrow Functions

    // for (let numero of numeros) {
    //     console.log(numero + numero);
    // }

    // Exibir os itens da Lista dobrados com Arrow Functions
    numeros.forEach(numero => console.log(numero + numero))

    console.log("\nExibir os itens pares da lista\n");

    // Exibir apenas os elementos pares da Lista sem Arrow Functions

    // for (let numero of numeros) {
    //     if (numero % 2 == 0)
    //         console.log(numero);
    // }

    // Exibir apenas os elementos pares da Lista com Arrow Functions
    numeros.forEach(item => {
        if (item % 2 == 0) console.log(item)
    })
}

main()