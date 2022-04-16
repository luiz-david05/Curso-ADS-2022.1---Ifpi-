/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.*/
import {print, input} from '../../utils.js'
function main(){
    //entradas
    const qtd = Number (input('digite a quantidade de latão em kg: '))
    //processo
    const qtd_cobre = qtd * 0.7
    const qtd_zinco = qtd * 0.3
    //saida
    print(`${qtd.toFixed(1)} kg de latão equivalem a: ${qtd_cobre.toFixed(1)}% de cobre e ${qtd_zinco.toFixed(1)}% de zinco `)
}main()