/* O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor. */
import {print,input} from '../../utils.js'
function main(){
    //entradas
    const preço_inicial = Number(input('digite o valor de fábrica do carro: '))
    //processo
    const preço_final = preço_inicial + (preço_inicial * 0.28) + (preço_inicial * 0.45)
    //saida
    print(`valor do carro para o consumidor: ${preço_final.toFixed(2)} R$`)
    
}main()