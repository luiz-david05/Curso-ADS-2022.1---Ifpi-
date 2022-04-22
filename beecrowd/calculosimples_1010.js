/* Neste problema, deve-se ler o código de uma peça 1,
o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago. */
import {input} from '../utils.js'
function main(){
    const qtd = Number(input(': ').split(" ")[1])
    const preco = Number(input(': ').split(" ")[2])
    const qtd_2 = Number(input(': ').split(" ")[1])
    const preco_2 = Number(input(': ').split(" ")[2])
    let total = qtd * preco
    total += qtd_2 * preco_2
    console.log(`VALOR A PAGAR: R$ ${(total).toFixed(2)}`)
    }main()