/*Leia 2 vetores A e B com N elementos, escreva um vetor C, sendo este a junção dos vetores A e B.
Desta forma, o vetor C deverá ter 2*N elementos.*/

import fs from  'fs';
import {novo_vetor, exibir_vetor, preencher_vetor, juncao_vetor} from './vetor_utils.js'
const input = fs.readFileSync('q2.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let index = 0
    const n = Number(lines[index++])
    const vetor_a = novo_vetor(n)
    const vetor_b = novo_vetor(n)

    preencher_vetor(vetor_a)
    exibir_vetor(vetor_a)
    preencher_vetor(vetor_b)
    exibir_vetor(vetor_b)

    const vetor_c = novo_vetor(n * 2)
    juncao_vetor(n, vetor_a, vetor_b, vetor_c)
    exibir_vetor(vetor_c)
}
main()
/*function juncao_vetor(tamanho, vetor_a, vetor_b, vetor_c){
    let i = 0

    for(let j = 0; j < vetor_c.length; j++){
        if(j < tamanho){
            vetor_c[j] = vetor_a[j]
        }else{
            vetor_c[j] = vetor_b[i]
            i++
        }
    }
    return vetor_c
}
*/
