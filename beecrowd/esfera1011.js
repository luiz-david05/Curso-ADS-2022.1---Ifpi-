/* Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.*/
import {input} from '../utils.js'
function main(){
    const pi = 3.14159
    const raio = Number(input('valor do raio: '))
    const esfera = (4 * pi * raio ** 3) / 3
    console.log(`VOLUME = ${esfera.toFixed(3)}`)
}main()

