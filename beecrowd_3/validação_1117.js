import fs from 'fs';
const input = fs.readFileSync('1117.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let nota_valida = 0
    let i = 0
    let nota = Number(lines[i ++])
    let media= 0
    let count = 0
    while(nota > 10 || nota < 0){
        console.log('nota invalida')
        nota = Number(lines[i ++])
        if(nota <= 10 && nota >= 0){
            nota_valida += nota
            count ++
        }
    }
    let nota_2 = Number(lines[i ++])
    while(nota_2 > 10 || nota < 0){
        console.log('nota invalida')
        nota_2 = Number(lines[i ++])
        if(nota_2 <= 10 && nota_2 >= 0){
            nota_valida += nota_2
            count ++
        }
    }
    media = nota_valida / count
    console.log(`media = ${media.toFixed(2)}`)
}
main()
