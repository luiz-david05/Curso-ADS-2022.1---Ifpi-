
import {input} from '../../utils.js'

function main(){
    const angulo = Number(input('digite a medida do ângulo: '))
    const pertence = quadrantes(angulo)
}
main()
function quadrantes (a){
    let quadrante
    if(a >= 0 && a <= 90 ){
        quadrante = 'Quadrante 1'
    }else if(a > 90 && a < 180 ){
        quadrante = 'Quadrante 2'
    }else if(a <= 180 && a < 270){
        quadrante = 'Quadrante 3'
    }else if(a <= 270 && a <= 360 ){
        quadrante = 'Quadrante 4'
    }else {
        quadrante = 'Ângulo inválido.'
    }
    console.log(`${a}° pertence ao : ${quadrante}`)
}
