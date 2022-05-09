import {input} from '../../utils.js'

function main(){
    const n = input('digite o número decimal: ').split('.').map(Number)
    const numero_arredondado = arredondar(n)
    console.log(`Número_arredondado: ${numero_arredondado}`)
}
main()
function arredondar(n){
    let inteira = n[0]
    let fracionada = n[1]
    if(fracionada >= 5) fracionada += 1
    {
        return inteira }

}