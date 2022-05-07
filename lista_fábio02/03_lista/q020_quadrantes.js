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