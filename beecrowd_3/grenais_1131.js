import fs from 'fs';
const input = fs.readFileSync('1131.txt', 'utf8')
var lines = input.split('\n');
function main(){
    let grenais, inter, gremio, empates, contador
    grenais = 0
    inter = 0
    empates = 0
    contador = 0
    const[gols_inter, gols_gremio] = Number(lines[0]).split(' ').map(Number)
}
main()