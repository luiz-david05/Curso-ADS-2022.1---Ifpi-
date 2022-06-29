import fs from  'fs';
import { gerar_vetor_invertido, novo_vetor, exibir_vetor, preencher_vetor } from './vetor_utils.js'
const input = fs.readFileSync('q1.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let index = 0
    const n = Number(lines[index++])
    const vetor_a = novo_vetor(n)

    preencher_vetor(vetor_a)
    exibir_vetor(vetor_a)
    
    const vetor_b = gerar_vetor_invertido(vetor_a)
    exibir_vetor(vetor_b)

}
main()

