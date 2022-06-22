import fs from 'fs'
const input = fs.readFileSync('1073.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const n = Number(lines[0])
    for(let i = 1; i <= n ; i++){
        if(i % 2 === 0){ 
        console.log(`${i}^2 = ${Math.pow(i, 2)}`)
        }
    }
}
main()
