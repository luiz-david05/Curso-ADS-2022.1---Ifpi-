import fs from 'fs'
const input = fs.readFileSync('1175.txt', 'utf8')
const lines = input.split('\n')

function main(){
    const vetor_n = new Array(20)
    
    for(let i = 0; i < 20; i++){
        vetor_n[i] = Number(lines[i])   
    }
    
    const vetor_invertido = gerar_vetor_invertido(vetor_n)

    for(let i = 0; i < 20; i++){
    console.log(`N[${i}] = ${vetor_invertido[i]}`)
    }
    
}
main()

function gerar_vetor_invertido(vetor){
    const vetor_invertido = new Array(vetor.length)

    let j = 0
    for (let i = vetor.length - 1; i >= 0; i--){
        vetor_invertido[j] = vetor[i]
        j++
    }

    return vetor_invertido
}