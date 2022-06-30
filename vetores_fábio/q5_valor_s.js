import fs from  'fs'
import {novo_vetor, exibir_vetor, preencher_vetor } from './vetor_utils.js'
const input = fs.readFileSync('q5.txt', 'utf8')
const lines = input.split('\n');


function main(){
    let index = 0
    const vetor_a = novo_vetor(index++)
    
    for (let i = 0; i < vetor_a.length; i++){
        vetor_a[i] = Number(lines[i+1])
    }
    
    const s = somar_s(vetor_a)
    console.log(`S = ${s}`)
}
main()

function somar_s(vetor){
    let s = 0

    for (let i = 0, j = 19; i < 20 && j > 0; i++, j--){
        s += (vetor[i] - vetor[j]) ** 2
    }
    return s
}