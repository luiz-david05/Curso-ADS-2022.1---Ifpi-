import fs from  'fs';
const input = fs.readFileSync('q7.txt', 'utf8')
const lines = input.split('\n');

function main(){
    let i = 0
    const x = Number(lines[i++])
    let valores_comparacao = 0
    let count_voltas = 0
    while(!(x === valores_comparacao)){
        valores_comparacao = Number(lines[i++])
        count_voltas++
        if(x === valores_comparacao){
            console.log(`total de voltas do loop = ${count_voltas}`)
            console.log(`valor de x ${x} = ao valor digitado ${valores_comparacao}`)
        }
    }
}
main()
