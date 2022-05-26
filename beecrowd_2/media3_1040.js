import fs from 'fs';
const input = fs.readFileSync('1040.txt', 'utf8')
var lines = input.split('\n');
function main(){
    const [n1, n2, n3, n4] = lines[0].split(' ').map(Number)
    const diario = boletim(n1, n2, n3, n4)
}
main()
function boletim(n1, n2, n3, n4){
    let nota_exame, media_final, media
    media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10
    console.log(`Media: ${media.toFixed(1)}`)
    if(media >= 7.0){
        console.log('Aluno aprovado.')
    }else if(media < 5.0){
        console.log('Aluno reprovado.')
    }else if(media >= 5.0 && media <= 6.9){
        console.log('Aluno em exame.')
        nota_exame = Number(lines[1])
        console.log(`Nota do exame: ${nota_exame.toFixed(1)}`)
        media_final = (media + nota_exame) / 2
        if(media_final >= 5){
            console.log('Aluno aprovado.')    
            console.log(`Media final: ${media_final.toFixed(1)}`)
        }else{
            console.log('Aluno reprovado.')
            console.log(`Media final: ${media_final.toFixed(1)}`)
        }
    }
}

