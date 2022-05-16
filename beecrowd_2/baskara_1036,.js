import {input} from '../utils.js'

function main(){
    const entradas = input('A, B, C: ')
    const [a, b, c] = entradas.split('').map(Number)
    const result = baskara(a, b, c)
}
main()
function baskara(a, b, c){
    let delta = b * b - 4 * a * c
    let r1, r2
    if( a === 0 || delta < 0){
        console.log('Impossivel calcular')
    }else{
        r1 = (-b + Math.sqrt(delta)) / 2 * a
        r2 = (-b - Math.sqrt(delta)) / 2 * a
        console.log(`R1 = ${r1.toFixed(5)}`)
        console.log(`R2 = ${r2.toFixed(5)}`)
    }

}