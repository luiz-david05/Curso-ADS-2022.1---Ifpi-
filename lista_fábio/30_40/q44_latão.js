/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.*/
import {print, input} from '../../utils.js'
function main(){
    //entradas
    const qtd = Number (input('digite a quantidade de latão em kg: '))
    //processo por meio de função
    const latao =  percentual_latao(qtd)
}main()
function percentual_latao (valor){
    let qtd_cobre = valor * (70 / 100)
    let qtd_zinco = valor * (30 / 100)
    if(valor > 1){
    console.log(`${valor.toFixed(1)} kg de latão equivalem a: ${qtd_cobre.toFixed(1)} kg de cobre e ${qtd_zinco.toFixed(1)} kg de zinco `)
    }else{
    console.log(`${valor.toFixed(1)} kg de latão equivalem a: ${qtd_cobre.toFixed(1)} g de cobre e ${qtd_zinco.toFixed(1)} g de zinco `)
    }
}