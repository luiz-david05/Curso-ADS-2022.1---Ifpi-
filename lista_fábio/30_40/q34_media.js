//Leia 3 números, calcule e escreva a média dos números.
import {print , input} from '../../utils.js'
function main(){
    print(`digite 3 números e veja a média`)
    const n1 = Number(input('digite o 1° número: '))
    const n2 = Number(input('digite o 2° número: '))
    const n3 = Number(input('digite o 3° número: '))

    const media = Math.trunc(n1 + n2 + n3 ) / 3
    print(`a média é : ${media}`)
}main()