import {print, input} from '../utils.js'
function main(){
    // entradas
    print('calcular área da circunfêrencia')
    const raio = Number(input('digite o valor do raio: '))
    // processo
    const pi = 3.14159
    const area = pi * raio ** 2
    //saida
    print(`A = ${area.toFixed(4)}`)
}main()