import fs from 'fs';
const input = fs.readFileSync('1174.txt', 'utf8')
const lines = input.split('\n')

function main(){
    const A = new Array(100)

    for(let i = 0; i < 100; i++){
        A[i] = Number(lines[i])
        if( A[i] <= 10){
            console.log(`A[${i}] = ${A[i].toFixed(1)} `)
        }
    }
}
main()