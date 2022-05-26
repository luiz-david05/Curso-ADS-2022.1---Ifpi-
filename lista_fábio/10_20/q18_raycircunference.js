import {print , input} from '../../utils.js'
function main(){
    //start
    print('calcular o comprimento do raio de uma circunfêrencia')
    const ray = Number(input('digite o valor do raio: '))
    const PI = 3.4
    //process
    const c = 2 * PI * ray
    //output
    print(`comprimento do raio = ${c.toFixed(1)}  `) 

} 
main()