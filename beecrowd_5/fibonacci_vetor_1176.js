import fs from 'fs';
const input = fs.readFileSync('1176.txt', 'utf8')
const lines = input.split('\n')

function main(){
    let t = Number(lines[0])
    const fib = new Array(61)
    fib[0] = 0
    fib[1] = 1

    for(let i = 2; i <= 60; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    let n
    for(let i = 0; i < t; i++){
        n = Number(lines[i+1])

        console.log(`Fib(${n}) = ${fib[n]}`)
    }
}
main()