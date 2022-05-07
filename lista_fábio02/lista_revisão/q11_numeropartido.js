import {input} from '../../utils.js'

function main(){
    const numero =  Number(input('digite um número inteiro menor que 1000: '))
    const n_convertido = elementos(numero) 
}
main()
function elementos(n){
    let centena = Math.trunc(n / 100)
    let resto_1 = n % 100
    let dezena = Math.trunc(resto_1 / 10)
    let unidade = Math.trunc(resto_1 % 10)
    if(centena > 1 && dezena > 1 && unidade > 1){
        console.log(`${centena} centenas, ${dezena} dezenas e ${unidade} unidades`)
    }else if(centena === 0 && dezena > 1 && unidade > 1){
        console.log(`${dezena} dezenas, ${unidade} unidades`)
    }
}
