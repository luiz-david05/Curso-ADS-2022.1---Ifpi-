//Um sistema de equações lineares do tipo:
// ax+by = c , dx + ey = f , pode ser resolvido segundo mostrado abaixo :
// x = c*e - b*f / a*e - b*d , y = a*f  - c*d
import {input} from '../../utils.js'
function main(){
    //entradas
    console.log(`calcular um sistema de equações lineares`)
    const variaveis = input('valor de A, B, C, D, E, e F: ')
    const [a, b, c, d, e, f] = variaveis.split(' ').map(Number)
    const resultado_equacao = equacao_linear(a, b, c, d, e, f)
}main()
function equacao_linear(a, b, c, d, e, f){
    const x = (c * e - b * f) / (a * e - b * d)
    const y = a * f - c * d
    console.log(`x = ${x}, y = ${y}`) 
}