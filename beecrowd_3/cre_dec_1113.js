import fs from 'fs';
const input = fs.readFileSync('1113.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    let values = lines[i++].split(' ')
    let x = Number(values[0])
    let y = Number(values[1])

    while(x !== y){
        x > y ? 
        console.log('Decrescente') :
        console.log('Crescente')

        values = lines[i++].split(' ')
        x = Number(values[0])
        y = Number(values[1])
    }
}
main()