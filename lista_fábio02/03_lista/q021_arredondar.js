import {input} from '../../utils.js'
function main(){
    const decimal = input('número decimal: ')
    const [n1, n2] = decimal.split('.').map(Number)
    const arredondado = arredondar(n1, n2)
}
main()
function arredondar(a, b){
    let inteira = a
    let fracionaria = b 
    if(fracionaria >= 5 ){
        fracionaria ++
        console.log(`Número arredondado: ${inteira}.${fracionaria}`)
    }else{
        console.log(`Número arredondao: ${inteira}`)
    }
} 
    