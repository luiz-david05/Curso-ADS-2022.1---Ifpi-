import fs from 'fs'
const input = fs.readFileSync('1071.txt', 'utf8')
let lines = input.split('\n');

function main(){
    let x = Number(lines[0])
    let y = Number(lines[1])
    let maior = Math.max(x, y)
    let menor = Math.min(x, y) 
    let soma = 0
    for(let i = (menor + 1); i < maior; i++){
        if(i % 2 !== 0){
            soma += i
        }
    }
    console.log(soma)
}
main()