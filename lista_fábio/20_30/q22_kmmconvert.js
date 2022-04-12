//Leia um valor em km, calcule e escreva o equivalente em m.

import { print,input} from "../../utils.js"
function main(){
    //start
    let km = Number(input('digite o valor em km: '))
    //process
    km *= 1000
    //output
    print(`feita conversão para metros : ${km}`) 
}
main()