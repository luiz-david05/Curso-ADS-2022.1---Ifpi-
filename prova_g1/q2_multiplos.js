import { input } from '../utils.js'

function main(){
    let numero = Number(input('insira um numero: '))
    let numero_2 = Number(input('insira outro numero: '))
    let count_pares = 0
    let count_impares = 0
    let count_positive = 0
    let count_negative = 0
    if(numero % 2 === 0){
        count_pares ++
    }else{
        count_impares ++
    }

    if(numero_2 % 2 === 0){
        count_pares ++
    }else{
        count_impares ++
    }

    if(numero > 0){
        count_positive ++
    }else if(numero < 0){
        count_negative ++
    }

    if(numero_2 > 0){
        count_positive ++
    }else if(numero_2 < 0){
        count_negative ++
    }
    while(numero % numero_2 !== 0){
        numero = Number(input('insira um numero: '))
        numero_2 = Number(input('insira outro numero: '))
        if(numero % 2 === 0){
            count_pares ++
        }else{
            count_impares ++
        }

        if(numero_2 % 2 === 0){
            count_pares ++
        }else{
            count_impares ++
        }

        if(numero > 0){
            count_positive ++
        }else if(numero < 0){
            count_negative ++
        }

        if(numero_2 > 0){
            count_positive ++
        }else if(numero_2 < 0){
            count_negative ++
        }
    }
    console.log(`\n${count_pares} valor(es) par(es)`)
    console.log(`${count_impares} valor(es) impar(es)`)
    console.log(`${count_positive} valor(es) positivo(s)`)
    console.log(`${count_negative} valor(es) negativo(s)`)
}
main()