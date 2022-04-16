//Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
import {print,input} from '../../utils.js'
function main(){
    //entradas
    print(`digite sua idade em anos, meses e dias.. ex: (21 anos, 3 meses e 10 dias)`)
    const anos = Number(input('digite a sua idade em anos: '))
    const meses = Number(input('digite a sua idade em meses: '))
    const dias = Number(input('digite a sua idade em dias: '))
    //processo
    const anos_dias = anos * 365
    const meses_dias = meses * 31
    const dias_totais = Math.trunc (anos_dias + meses_dias + dias)
    //saida
    print(`a idade em dias é: ${dias_totais} `)
}main()