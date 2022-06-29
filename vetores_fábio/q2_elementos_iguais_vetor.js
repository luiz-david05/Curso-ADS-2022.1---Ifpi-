import fs from  'fs';
import {novo_vetor, exibir_vetor, preencher_vetor, verificar_se_ha_elementos_repetidos_vetor} from './vetor_utils.js'
const input = fs.readFileSync('q2.txt', 'utf8')
const lines = input.split('\n');


function main(){
    let index = 0
    const n = Number(lines[index])
    const vetor_a = novo_vetor(n)
    
    preencher_vetor(vetor_a)
    exibir_vetor(vetor_a)

    verificar_se_ha_elementos_repetidos_vetor(vetor_a)

    if(verificar_se_ha_elementos_repetidos_vetor(vetor_a)){
        console.log(`Há elementos repetidos`)
    }else{
        console.log('Não há elementos repetidos')
    } 

}
main()


