import fs from 'fs';
const input = fs.readFileSync('1116.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let qtd_pares = Number(lines[0])
    for(let i = 0; i < qtd_pares; i++){
        let [x, y] = lines[i + 1].split(' ').map(Number)
        let divisao = 0
        if(y === 0){
            console.log(`divisao impossivel`)
        }else{
            divisao = x / y
            console.log(divisao.toFixed(1))
        }
    }
}
main()

