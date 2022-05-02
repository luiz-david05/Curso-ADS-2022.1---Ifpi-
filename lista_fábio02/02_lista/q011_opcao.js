// leia 4 números(opção, n1, n2, n3) e escreva-o valor de n1 se opção igual a 1, o valor de n2 se opção = 2 , o valor de n3 se o valor de opção for = 3 , unicos valores possiveis de opção ( 1, 2, 3) 
import {input} from '../../utils.js'
function main(){
    // entradas
    const entradas = input('digite os 4 números: ')
    const [opcao, n1, n2, n3 ] = entradas.split(' ').map(Number)
    const exibir = exibir_valores(opcao, n1, n2, n3)
    console.log(`\t>${exibir}`)
}
main()
function exibir_valores(opcao, a, b, c){
    if(opcao === 1){
        return a
    }else if(opcao === 2){
        return b
    }else if(opcao === 3){
        return c
    }else if(opcao > 3){
        return 'unicos valores possíveis: 1, 2, 3'
        }
    }
