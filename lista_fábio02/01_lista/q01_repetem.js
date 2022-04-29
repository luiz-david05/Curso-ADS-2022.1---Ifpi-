/*leia  3 números, verifique e escreva quantos numeoros iguais existem entre os números */ 
import {input, print} from '../../utils.js'

function main(){
    const [a, b, c]= input('digite os 3 números: ').split(" ").map(Number)
    const resultado = verificarIgual (a, b, c)
    print(`>\t há ${resultado} números que se repetem`)
}
main()
function verificarIgual (a, b, c){
    let repete = 0
    if(a === b && b === c) repete = 3
    else if (a === b || b === c || c === a) repete = 2
    return repete
}