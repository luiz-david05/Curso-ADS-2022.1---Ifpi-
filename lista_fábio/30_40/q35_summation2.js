/*Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
número = 9534 ; soma = 9+5+3+4 = 21.*/
import {print,input} from '../../utils.js'
function main(){
    print('digite um número inteiro (4 dígitos).')
    const numero = input('Número: ')
    const [n1, n2, n3, n4] = numero.split('').map(Number)
    let soma = somar_elementos(n1, n2, n3, n4)
    if(numero < 10000 && soma > 0){
        print(`Soma dos elementos do número = ${soma}`)
    }else{
    print(`Digite um número inteiro de 4 dígitos`)
    } 
}main()
function somar_elementos(a, b, c, d){
    return a + b + c + d
}


