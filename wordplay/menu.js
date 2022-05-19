import { readFileSync } from 'fs'
import { enter_to_continue} from './input_utils.js'
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
function exibir_menu(){
let menu = '>>>>>  <<<<<'
menu += '\n[1] -> Palavras com mais de 20 letras'
menu += '\n[2] -> Palavras sem a letra e'
menu += '\n[0] -> Sair\n '
console.log(menu)
}
function carregar_palavras_do_arquivo(nome_arquivo){
    const arquivo = readFileSync(nome_arquivo, {encoding: 'utf-8'})
    const palavras_carregadas = arquivo.split('\n')
    return palavras_carregadas
}
