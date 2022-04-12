//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
import {print , input} from '../../utils.js'
function main(){
    //start
    const kg = Number (input('digite o peso em kg: '))
    //process
    const g = kg * 1000
    //output
    print(`novo peso: ${g.toFixed(0)}g`)
}
main()