import fs from 'fs';
const input = fs.readFileSync('1101.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    let values = lines[i++].split(' ').map(Number)
    let x = values[0]
    let y = values[1]
    while(x > 0 && y > 0){
        let maior = Math.max(x, y)
        let menor = Math.min(x, y)
            let texto = ''
            let soma = 0
            for(let i = menor; i <= maior; i++){
                soma += i
                texto += i + " "
            }
            console.log(`${texto}Sum=${soma}`)
            values = lines[i++].split(' ').map(Number)
            x = values[0]
            y = values[1]
        }
        }
main()