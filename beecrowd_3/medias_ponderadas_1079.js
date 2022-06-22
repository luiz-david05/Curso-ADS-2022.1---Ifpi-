import fs from 'fs';
const input = fs.readFileSync('1079.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    const n = Number(lines[i++])
    let notas, a, b, c
    for(let i = 0; i < n; i++){
        notas = lines[i+1].split(' ').map(Number)
        a = notas[0]
        b = notas[1]
        c = notas[2]
        let media = calcular_media(a, b, c) 
        console.log(media.toFixed(1))
    }
}
main()
function calcular_media(a, b, c){
    return ((a * 2) + (b * 3) + (c * 5)) / 10
}