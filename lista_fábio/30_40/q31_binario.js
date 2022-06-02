//Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
import {print,input} from '../../utils.js'
function main(){
    //entradas
    print('digite o número de 4 dígitos na base binária.')
    let numero = input('Numero: ')
    const decimal = binario_decimal(numero)
    //saida
    // ainda não sei verificar arrays totalmente  
    if(numero <= 1111){
        print(`na base decimal: ${decimal}`)
    }else{
        print(`${numero} inválido, digite apenas 4 digitos na base binária.`)
    }
}main()
function binario_decimal(numero){
    let decimal = 0
    let valor_digito
    for(let i = 0; i < 4 ;){
        valor_digito =  (2 ** (3 - i)) * Number(numero[i])
        decimal = decimal + valor_digito
        i++
    }
    return decimal
}

