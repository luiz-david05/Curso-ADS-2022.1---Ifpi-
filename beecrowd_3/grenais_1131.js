import fs from 'fs';
const input = fs.readFileSync('1131.txt', 'utf8')
var lines = input.split('\n');
function main(){
    let i = 0
    let [inter, gremio] = lines[i++].split(' ').map(Number)
    let v_inter = 0
    let v_gremio = 0
    let empate = 0
    if(inter > gremio){
         v_inter++
    }else if(inter === gremio){
        empate++
    }else{
        v_gremio++
    }
    console.log('Novo grenal (1-sim 2-nao)')
    let grenal = Number(lines[i++])
    let grenais = 1
    while(grenal !== 2){
        console.log('Novo grenal (1-sim 2-nao)')
        let values = lines[i++].split(' ').map(Number)
        grenal = Number(lines[i++])
        inter = values[0]
        gremio = values[1]
        if(inter > gremio){
            v_inter++
       }else if(inter === gremio){
           empate++
       }else{
           v_gremio++
       }
       grenais++
    }
    console.log(`${grenais} grenais`)
    console.log(`Inter:${v_inter}`)
    console.log(`Gremio:${v_gremio}`)
    console.log(`Empates:${empate}`)
    if(v_inter > v_gremio){
        console.log(`Inter venceu mais`)
    }
    else if(v_inter === v_gremio){
        console.log('Nao houve vencedor')
    }else{ 
    console.log(`Gremio venceu mais`)
    }
}
main()