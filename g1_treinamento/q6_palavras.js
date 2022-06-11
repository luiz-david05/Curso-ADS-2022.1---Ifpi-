import fs from 'fs';
const input = fs.readFileSync('q6.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const frase = lines[0]
    const qtd_palavras = palavras(frase)

}
main()
function palavras(frase){
    const qtd_characters = frase.length
    const qtd_palavras = frase.split(' ').length
    console.log(frase)
    qtd_characters >= 80 && qtd_characters <= 180 ? console.log(`Quantidade de palavras : ${qtd_palavras}`) : console.log('Caracteres de menos ou demais.')
}