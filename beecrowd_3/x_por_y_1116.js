import fs from 'fs';
const input = fs.readFileSync('1131.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let qtd, i
    let n = 0
    qtd = Number(lines[i++])
    while(qtd > n){
        let [x, y] = lines[i++].split(' ').map(Number)
        if(y === 0){
            console.log('divisao impossivel')
        }else{
            let div = x / y
            console.log(div.toFixed(1))
        }
        n ++ 
    }
}
main()