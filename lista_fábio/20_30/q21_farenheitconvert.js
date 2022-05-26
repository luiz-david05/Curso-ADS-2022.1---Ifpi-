//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9)

import {print , input} from '../../utils.js'
function main(){
    // start
    print('conversor graus °F ==> °C')
    const fahrenheit = Number (input('Digite a tempertura em fahrenheit: '))
    //process
    const celsius = ( 5 * fahrenheit - 160) /9
    //output
    print(`resultado: ${celsius.toFixed(1)} °C`)  
}
main()