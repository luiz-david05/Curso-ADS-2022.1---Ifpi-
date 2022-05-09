<<<<<<< HEAD
import {input} from '../../utils.js'

function main(){
    let angulo = Number(input('digite a medida do ângulo:'))
    angulo = quadrantes(angulo)
}
main()
function quadrantes (a){
    if(a <= 90 && a >= 0 ){
        console.log(`${a}° pertence ao quadrante 1[0° - 90°]`)
    }else if(a >= 90 && a <= 180 ){
        console.log(`${a}° pertence ao quadrante 2[90° - 180°]`)
    }else if(a <= 180 && a <= 270){
        console.log(`${a}° pertence ao quadrante 3[180° - 270°]`)
    }else if(a <= 270 && a <= 360 ){
        console.log(`${a}° pertence ao quadrante 4[270° - 360°]`)
    }else {
        return 'ângulo inválido!'
    }
}
=======
import { input } from "../../utils.js"

function main(){
    const angulo = Number(input('valor do ângulo: '))
    const angulos = quadrantes(angulo)
}
main()
function quadrantes(n){
    if(n => 0 && n <= 90 ){
        console.log(`${n}º pertece ao quadrante 1 [0º - 90º]`)
    }else if(n => 90 && n <= 180 ){
        console.log(`${n}º pertence ao quadrante 2[90º - 180º]`)
    }else if(n >= 180 && n <= 270 ){
        console.log(`${n}º pertence ao quadrante 3[180º - 270º]`)
    }else if(n >= 270 && n <= 360){
        console.log(`${n}º pertence ao quadrante 4[270º - 360º]`)
    }
}
>>>>>>> 0e1c449a7b4f5a65f78990ce9ff8e00cc0fbce95
