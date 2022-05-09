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
