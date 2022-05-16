import {input} from '../utils.js'

function main(){
    const [a, b, c, d] = input('a, b, c, d: ').split(' ').map(Number)
    const soma = c + d
    const soma_2 = a + b
    if(b > c && d < a && soma > soma_2 && positivo(c) && positivo(d)
    && par(a)){
        console.log('Valores aceitos')
    }else{
        console.log('Valores nao aceitos')
    }
}
main()
function positivo(n){
    if(n % 1 === 0){
        return true
    }else{
        return false
    }
}
function par(n){
    if(n % 2 === 0){
        return true
    }else{
        return false
    }
}