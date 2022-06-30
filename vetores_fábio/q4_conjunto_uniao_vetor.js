import fs from  'fs';
import {novo_vetor, exibir_vetor, preencher_vetor, juncao_vetor, intersecao_vetor} from './vetor_utils.js'
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

    const vetor_d = intersecao_vetor(vetor_a, vetor_b)

    exibir_vetor(vetor_d)



}
main()
