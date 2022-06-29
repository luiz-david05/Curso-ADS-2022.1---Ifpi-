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
    preencher_vetor(vetor_b)
    exibir_vetor(vetor_a)
    exibir_vetor(vetor_b)

    const vetor_c = novo_vetor(2 * n)
    juncao_vetor(n, vetor_a, vetor_b, vetor_c)
    exibir_vetor(vetor_c)


}
main()

function intersecao(tamanho ,vetor_a, vetor_b, vetor_d){
    for(let i = 0; i > vetor_d.length; i++){
        if(vetor_a[i] === vetor_b[i]){
            vetor_d
        }
    }
}