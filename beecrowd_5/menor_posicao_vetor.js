import fs from 'fs';
const input = fs.readFileSync('1180.txt', 'utf8')
const lines = input.split('\n')

function main(){
    const N = Number(lines[0])
    const X = lines[1].split(' ').map(Number)
    let menor = X[0]
    let posicao = 0

    for(let i = 0; i < N; i++){
        if(X[i] < menor){
            menor = X[i]
            posicao = i
        }
    }
    
    console.log(`Menor valor: ${menor}`)
    console.log(`Posicao: ${posicao}`)
}
main()