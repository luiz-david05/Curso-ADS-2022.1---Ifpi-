import { input } from '../utils.js'

function main(){
    let a = Number(input('numero a: '))
    let b = Number(input('numero b: '))
    let mmc = Number(input(`mmc: `))
    while(a % mmc !== 0 && b % mmc !== 0){
        mmc = Number(input('digite o valor do mmc: '))
    }
    console.log(`mmc dos valores ${a} e ${b}: ${mmc}`)
}
main()