// ler 3 lados de um triangulo e identificar a hipotenusa e seus catetos

import {input} from '../../utils.js'

function main(){
    const lados = Number(input('Digite os valores dos lados do triângulo: '))
    const [a, b, c] = lados.split('').map(Number)
    let hipotenusa, cateto
    if(a > b && c < a){
        
    }
}
main()