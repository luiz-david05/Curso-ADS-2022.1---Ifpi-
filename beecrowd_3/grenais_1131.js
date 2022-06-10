import fs from 'fs';
const input = fs.readFileSync('1131.txt', 'utf8')
var lines = input.split('\n');
function main(){
   let [gols_inter, gols_gremio]= lines[0].split('').map(Number)
   let vitoria_inter = 0
   let vitoria_gremio = 0
   let empates = 0
   if(gols_inter > gols_gremio){
       vitoria_inter ++
   }else if(gols_inter === gols_gremio){
       empates ++
   }else{
       vitoria_gremio ++
   }
   let count = 0
   let grenais = 1
   while(count !== 2){
       console.log('Novo grenal (1-sim 2-nao)')
       grenais = Number(lines[count ++])
       count += grenais
       if(grenais === 1){
           [gols_inter, gols_gremio] = lines[count + 2].split('').map(Number)
           if(gols_inter > gols_gremio){
            vitoria_inter ++
            }else if(gols_inter === gols_gremio){
            empates ++
            }else{
            vitoria_gremio ++
        }
       }
   }
   console.log(`${count} grenais`)
   console.log(`Inter:${vitoria_inter}`)
   console.log(`Gremio:${vitoria_gremio}`)
   console.log(`Empates:${empates}`)
   if(vitoria_inter > vitoria_gremio){
       console.log('Inter venceu mais')
   }else if(vitoria_inter === vitoria_gremio){
       console.log('Nao houve vencedor')
   }else{
       console.log('Gremio venceu mais')
   }
}
main()