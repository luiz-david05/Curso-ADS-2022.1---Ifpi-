import {input} from '../utils.js'

function main(){
    let numero = Number(input('valores: '))
    let maior = 0
    let posicao = 1
    while(numero < 100){
        numero = Number(input('valores: '))
        maior = Math.max(numero) 
        posicao ++
    }
    console.log(`\nMaior número: ${maior}`)
    console.log(`posição: ${posicao}`)
}
main()
