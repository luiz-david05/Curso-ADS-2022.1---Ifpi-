import fs from 'fs';
const input = fs.readFileSync('1016.txt', 'utf8')
var lines = input.split('\n');
function main(){
    const distancia = Number(lines[0])
    const tempo = distancia * 2
    console.log(`${tempo} minutos`)
}main()