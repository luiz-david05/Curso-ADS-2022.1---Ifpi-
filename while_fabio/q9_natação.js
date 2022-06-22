import {input} from '../utils.js'

function main(){
    let n_prova = Number(input('Número da prova: '))
    let qtd_nadadores = Number(input('Qtd de nadadores: '))
    let clube_a = 0
    let clube_b = 0
    while(n_prova !== 0 && qtd_nadadores !== 0){
        while(qtd_nadadores > 0){
            let nome_nadador = input('Nome do competidor: \n')
            let classificacao = Number(input('Em qual coloção você terminou: '))
            let tempo = Number(input('Qual foi seu tempo de prova: '))
            let clube = input('A qual clube você pertence (A ou B): ')
            qtd_nadadores --
            if(clube === 'A'){
                if(classificacao === 1){
                    clube_a += 9
                }else if(classificacao === 2){
                    clube_a += 6
                }else if(classificacao === 3){
                    clube_a += 4
                }else if(classificacao === 4){
                    clube_a += 3
                }
            }
            if(clube === 'B'){
                if(classificacao === 1){
                    clube_b += 9
                }else if(classificacao === 2){
                    clube_b += 6
                }else if(classificacao === 3){
                    clube_b += 4
                }else if(classificacao === 4){
                    clube_b += 3
                }
            }
            console.log(`\nNome do competidor: ${nome_nadador}`)
            console.log(`Pertence ao clube: ${clube}`)
            console.log(`Colocação: ${classificacao}`)
            console.log(`Tempo de prova: ${tempo.toFixed(1)} minutos\n`)
            
        }
        n_prova = Number(input('Número da prova: '))
        qtd_nadadores = Number(input('Qtd de nadadores: '))
    }
    console.log(`\ntotal de pontos clube a: ${clube_a}`)
    console.log(`total de pontos clube b: ${clube_b}`)
    if(clube_a > clube_b){
        console.log('Clube A venceu')
    }else if(clube_a === clube_b){
        console.log('Clube B venceu')
    }else{
        console.log('Empate')
    }
}
main()