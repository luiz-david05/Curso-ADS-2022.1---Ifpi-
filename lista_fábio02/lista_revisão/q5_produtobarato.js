import { input } from '../../utils.js'

function main(){
    const v1 = Number(input('digite o valor do primeiro produto: '))
    const v2 = Number(input('digite o valor do segundo produto: '))
    const v3 = Number(input('digite o valor do terceiro produto: '))
    const barato = avaliar_preco(v1, v2, v3)   
}
main()
function avaliar_preco (p1, p2, p3){
    if(p1 < p2 && p1 < p3 ){
        console.log(`${p1} é o mais barato!`)
    }else if(p2 < p1 && p2 < p3){
        console.log(`${p2} é o mais barato!`)
    }else if(p3 < p1 && p3 < p2){
        console.log(`${p3} é o mais barato1`)
    }
}