import {input} from '../utils.js'

function main(){
    const entradas = input('digite os valores de A, B, C e D: ')
    const [a, b, c, d] = entradas.split('').map(Number)
    const aceita_ae_pow = aceito_ou_nao(a, b, c, d)
    console.log(aceita_ae_pow)
}
main()
function aceito_ou_nao (a, b, c, d){
    if(b > c && d > a && c + d > a + b && c % 1 === 0 && d % 1 === 0 && a % 2 === 0){
        return 'Valores aceitos'
    }else{
        return 'Valores não aceitos'
    }
}