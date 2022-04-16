//Um sistema de equações lineares do tipo:
// ax+by = c , dx + ey = f , pode ser resolvido segundo mostrado abaixo :
// x = c*e - b*f / a*e - b*d , y = a*f  - c*d
import {print, input} from '../../utils.js'
function main(){
    //entradas
    print(`calcular um sistema de equações lineares`)
    const a = Number(input('digite o valor de A: '))
    const b = Number(input('digite o valor de B: '))
    const c = Number(input('digite o valor de C: '))
    const d = Number(input('digite o valor de D: '))
    const e = Number(input('digite o valor de E: '))
    const f = Number(input('digite o valor de F: '))
    //processo
   const x = (c * e - b * f) / (a * e - b * d)
   const y = (a * f - c * d) / (a * e  - b * d)
    //saida
    print(`valor de x: ${x} e valor de y ${y}`) 
}main()