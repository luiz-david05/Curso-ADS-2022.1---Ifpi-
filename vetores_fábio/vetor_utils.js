import {input} from '../utils.js'

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
        vetor[i] = Number(input('> '))
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

export function intersecao_vetor(vetor_a, vetor_b){
    const vetor_d = vetor_a.filter(i => vetor_b.includes(i))

    return vetor_d
}


export function menorElemento(vetor){
   let menor  = vetor[0], posicao = 0
   
   for (let i = 0; i < vetor.length; i++){
    if (vetor[i] < menor){
        menor = vetor[i]
        posicao = i
    }
    return [menor, posicao]
   }
}

export function maiorElemento(vetor){
    let maior = vetor[0], posicao = 0

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior){
            maior = vetor[i]
            posicao = i
        }
    }
    return [maior, posicao]
}

export function media(vetor){
    let qtd = vetor.length, soma = 0

    for ( let i = 0; i < qtd; i++){
        soma += vetor[i]
    }

    let media = soma / qtd

    console.log(`Média dos valores do vetor = ${media.toFixed(2)}`)
}

export function somarTodos(vetor){
    let soma = 0

    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    console.log(`Soma de todos os elementos no vetor = ${soma}`)
}

export function adicionar_item_vetor(vetor, posicao, item) {
    const novoVetor = novo_vetor(vetor.length + 1)
    for (let i = 0, j = 0; i < novoVetor.length; i++) {
        if (i === posicao) {
            novoVetor[i] = item
        } else {
            novoVetor[i] = vetor[j]
            j++
        }
    }

    return novoVetor
}

export function vetor_push(vetor, item) {
    return adicionar_item_vetor(vetor, vetor.length, item)
}























