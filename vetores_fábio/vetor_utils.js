import fs from 'fs'
const input = fs.readFileSync('q2.txt', 'utf8')
const lines = input.split('\n');

export function novo_vetor(tamanho){
    return new Array(tamanho)
}

export function gerar_vetor_invertido(vetor){
    const vetor_copia = new Array(vetor.length)

    let j = 0
    for(let i = vetor.length - 1; i >= 0; i--){
        vetor_copia[j] = vetor[i]
        j++
    }
    return vetor_copia
}

export function exibir_vetor(vetor){
    console.table(vetor)
}

export function preencher_vetor(vetor){
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(lines[i+1])
    }
    return vetor
}

export 
function verificar_se_ha_elementos_repetidos_vetor(vetor){
    for(let elemento of vetor){
        if(contar_ocorrencia_em_vetor(vetor, elemento) > 1){
            return true
        }
    }
    return false
}

function contar_ocorrencia_em_vetor(vetor, elemento_a_contar){
    let count = 0
    let elemento_atual

    for(let i = 0; i < vetor.length; i++){
        elemento_atual = vetor[i]
        if(elemento_atual === elemento_a_contar){
            count++
        }
    }
    return count
}

export function juncao_vetor(tamanho, vetor_a, vetor_b, vetor_c){
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