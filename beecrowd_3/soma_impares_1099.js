import fs from 'fs'
const input = fs.readFileSync('1099.txt', 'utf8')
const lines = input.split('\n')

function main(){
    let i = 0
    const qtt_test = Number(lines[i++])

    for(let i = 0; i < qtt_test; i++){
        let values = lines[i+1].split(' ').map(Number)
        let x = values[0]
        let y = values[1]
        let maior = Math.max(x, y)
        let menor = Math.min(x, y)
        let soma = 0

        for(let j = (menor + 1); j < maior; j++){
            if(j % 2 !== 0){
                soma += j
            }
        }
        console.log(soma)
    }

}
main()
