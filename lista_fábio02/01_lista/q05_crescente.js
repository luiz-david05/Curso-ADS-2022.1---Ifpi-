/* leia 3 números e os escreva em ordem crescente */

import {input} from '../../utils.js'
function main(){
    const numbers = input('digite os 3 números: ').split(' ').map(Number)
    numbers.sort((a, b) => a - b)
    console.log(numbers)
} 
main()

