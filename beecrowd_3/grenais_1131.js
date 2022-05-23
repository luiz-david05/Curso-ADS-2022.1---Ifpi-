import {input} from '../utils.js'
function main(){
    let gols_inter =  Number(input('Quantidade de gols do inter: '))
    let gols_gremio = Number(input('Quantidade de gols do gremio: '))
    let vitorias_inter = 0 , vitorias_gremio = 0, empates = 0
    if(gols_inter > gols_gremio){
        vitorias_inter ++
    }else if(gols_gremio > gols_inter){
        vitorias_gremio ++
    }else if(gols_inter === gols_gremio){
        empates ++
    }
    let novo_grenal = Number(input('Novo grenal (1-sim 2-nao): '))
    let contador_grenais = 1
    while(novo_grenal === 1){
        gols_inter = Number(input('Quantidade de gols do inter: '))
        gols_gremio = Number(input('Quantidade de gols do gremio: '))
        contador_grenais ++
        
        if(gols_inter > gols_gremio){
            vitorias_inter ++
        }else if(gols_inter === gols_gremio){
            empates ++
        }else{
            vitorias_gremio ++
        }   
        novo_grenal = Number(input('Novo grenal (1-sim 2-nao): '))
    }
    console.log(`${contador_grenais} grenais`)
    console.log(`Inter: ${vitorias_inter}`)
    console.log(`Gremio: ${vitorias_gremio}`)
    console.log(`Empates: ${empates}`)
    if(empates > vitorias_inter && empates > vitorias_gremio){
        console.log(`Nao houve vencedor`)
    }else if(vitorias_inter > vitorias_gremio){
        console.log('Inter venceu mais')
    }else if( vitorias_gremio > vitorias_inter){
        console.log('Gremio venceu mais')
    }

}
main()