import { readFileSync } from 'fs'
import { enter_to_continue, pegar_texto} from './input_utils.js'
import {input} from '../utils.js'


function main(){
    const palavras = carregar_palavras_do_arquivo('palavras.txt')
    const qtd_palavras = palavras.length
    console.log(`Total de palavras: ${qtd_palavras}, status: carregadas!`)
    exibir_menu()
    let opcao = Number(input('Digite aqui: '))
    while(opcao !== 0){
        if(opcao === 1){
            palavras_com_mais_de20letras(palavras)
        }else if(opcao === 2){
            palavras_sem_letra_e(palavras)
        }else if(opcao === 3){
            palavras_sem_letras_proibidas(palavras)
        }else if(opcao === 4){
            palavras_que_usam_letras_obrigatorias(palavras)
        }else if(opcao === 5){
            palavras_que_usam_todas_as_letras_obrigatorias(palavras)
        }
        enter_to_continue()
        console.clear()
        exibir_menu()
        opcao = Number(input('Digite aqui: '))
    }
}
main()
function palavras_com_mais_de20letras(palavras){
    let contador = 0 
    for(let palavra of palavras){
        if(palavra.length > 20){
            console.log(palavra)
            contador ++
        }
    }
    console.log(`Total de palavras com mais de 20 letras: ${contador}`)
}
function sem_letra_e(palavra){
    for(let letra of palavra){
        if(letra === 'e'){
            return false
        }
    }
    return true
}
function palavras_sem_letra_e(palavras){
    let contador = 0
    for(let palavra of palavras){
        if(sem_letra_e(palavra)){
            console.log(palavra)
            contador ++
        }
    }
    console.log(`Total de palavras sem a letra 'e': ${contador} `)
}
function evitam(palavra, letras_proibidas){
    for(let letra of palavra){
        if(contem(letras_proibidas, letra)){
            return false
        }
    }
    return true
}
function contem (palavra, letra){
    for (let caractere in palavra){
        if(caractere === letra){
            return true
        }
        return false
    }
}
function palavras_sem_letras_proibidas(palavras){
    const letras_proibidas = pegar_texto('Insira as Letras proibidas: ')
    let contador = 0 
    for(let palavra of palavras){
        if(evitam(palavra, letras_proibidas)){
            console.log(palavra)
            contador++
        }
    }
    console.log(`Total de palavras sem as letras proibidas "${letras_proibidas}": ${contador}`)
}
function usam_apenas(palavra, letras_obrigatorias){
    for(let letra of palavra.split('')){
        if(!contem(letras_obrigatorias, letra)){
            return false
        }
    }
    return true
} 
function palavras_que_usam_letras_obrigatorias(palavras){
    const letras_obrigatorias = pegar_texto('Insira as letras obrigatórias: ')
    let contador = 0
    for(let palavra of palavras){
        if(usam_apenas(palavra, letras_obrigatorias)){
            console.log(palavra)
            contador ++
        }
    }
    console.log(`Total de palavras que usam as letras obrigatórias "${letras_obrigatorias}": ${contador}`)
}
function usam_tudo(palavra, letras ){
    for(let caracter of palavra){
        if(!contem(letras, caracter)){
            return false
        }
    }
    return true
}
function palavras_que_usam_todas_as_letras_obrigatorias(palavras){
    const letras_obrigatorias = pegar_texto('Insira as letras obrigatórias: ')
    let contador = 0
    for(let palavra of palavras){
        if(usam_tudo(palavra, letras_obrigatorias)){
            console.log(palavra)
            contador ++
        }
    }
    console.log(`Total de palavras que usam todas as letras obrigatórias "${letras_obrigatorias}": ${contador}`)
}
function exibir_menu(){
let menu = ''
menu += '\n[1] -> Palavras com mais de 20 letras'
menu += '\n[2] -> Palavras sem a letra e'
menu += '\n[3] -> Palavras sem as letras proibidas'
menu += '\n[4] -> Palavras com as letras obrigatórias'
menu += '\n[5] -> Palavras que usam todas as letras obrigatórias'
menu += '\n[0] -> Sair\n '
console.log(menu)
}
function carregar_palavras_do_arquivo(nome_arquivo){
    const arquivo = readFileSync(nome_arquivo, {encoding: 'utf-8'})
    const palavras_carregadas = arquivo.split('\n')
    return palavras_carregadas
}
