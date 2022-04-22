/*Leia quatro valores inteiros A, B, C e D. A seguir,
calcule e mostre a diferença do produto de A e B pelo
produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).*/
import {input} from '../utils.js'
function main(){
    const a = Number(input('numero 1: '))
    const b = Number(input('numero 2: '))
    const c = Number(input('numero 3: '))
    const d = Number(input('numero 4: '))
    const diferenca = (a * b) - (c * d)
    console.log(`Diferença = ${diferenca}`)
}main()