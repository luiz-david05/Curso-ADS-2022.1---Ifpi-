/*Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
número = 9534 ; soma = 9+5+3+4 = 21.*/
import {print,input} from '../../utils.js'
function main(){
    print('digite um número inteiro (4 dígitos).')
    const n = Number(input('**** : '))
    const milhar = Math.trunc (n / 1000)
    const resto_1 = n % 1000
    const centena = Math.trunc (resto_1 / 100)
    const resto_2 = n % 100
    const dezena = Math.trunc (resto_2 / 10)
    const unidade = Math.trunc ( resto_2 % 10)
    const soma = milhar + centena + dezena + unidade
    print(`${milhar} + ${centena} + ${dezena} + ${unidade} `)
    print(`a soma dos elementos do número é: ${soma}`)
}main()