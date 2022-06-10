import { input } from '../utils.js'

function main(){
    let a = Number(input('numero a: '))
    let b = Number(input('numero b: '))
    let mmc = b
    while(mmc % a !== 0 && mmc % b !== 0){
        mmc += b
    }
    console.log(`mmc dos valores ${a} e ${b}: ${mmc}`)
}
main()