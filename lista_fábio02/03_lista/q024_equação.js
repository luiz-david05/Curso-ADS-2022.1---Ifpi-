// ax2 + bx + c = 0
import { input } from "../../utils.js"
function main(){
    const raizes = input('valor de A, B, C: ')
    const [a, b, c] = raizes.split('').map(Number)
    const raizes_calculadas = equacao_2grau(a, b, c)
    if(a === 0){
        console.log('A deve ser diferente de 0')
    }
}
main()
function equacao_2grau(a, b, c){
    let delta, x1, x2
    delta = (b * b) - (4 * a * c)
    if(b < 0){
        x1 = (b + Math.sqrt(delta)) / (2 * a)
        x2 = (b - Math.sqrt(delta)) / (2 * a)
    }else{
        x1 = (-(b) + Math.sqrt(delta)) / (2 * a)
        x2 = (-(b) - Math.sqrt(delta)) / (2 * a)
    }
    if(isNaN(x2) || isNaN(x2)){
        console.log('Erro ao calcular o valor das raízes.')
    }
    console.log(`Raizes : x1 = ${x1} e x2 = ${x2}`)
}