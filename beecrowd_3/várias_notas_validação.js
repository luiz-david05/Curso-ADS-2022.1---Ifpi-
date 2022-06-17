import fs from 'fs';
const input = fs.readFileSync('1118.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    let a = Number(lines[i++])
    while(a < 0 || a > 10){
        console.log('nota invalida')
        a = Number(lines[i++])
    }
    let b = Number(lines[i++])
    while(b < 0 || b > 10){
        console.log('nota invalida')
        b = Number(lines[i++])
    }
    let media = (a + b) / 2
    console.log(`media = ${media.toFixed(2)}`)

    console.log('novo calculo (1-sim 2-nao)')
    let x = Number(lines[i++])
    while(x > 2 || x < 1){
        console.log('novo calculo (1-sim 2-nao)')
        x = Number(lines[i++])
    }
    let c = Number(lines[i++])
    while(c < 0 || c > 10){
        console.log('nota invalida')
        c = Number(lines[i++])
    }
    let d = Number(lines[i++])
    while(d < 0 || d > 10){
        console.log('nota invalida')
        d = Number(lines[i++])
    }
    media = (c + d) / 2
    console.log(`media = ${media.toFixed(2)}`)
    console.log('novo calculo (1-sim 2-nao)')
    x = Number(lines[i++])
    while(x < 1 || x > 2){
        x = Number(lines[i++])
    }
}   
main()