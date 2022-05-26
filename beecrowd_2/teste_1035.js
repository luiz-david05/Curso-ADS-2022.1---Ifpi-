import fs from 'fs';
const input = fs.readFileSync('1035.txt', 'utf8')
var lines = input.split('\n');


function main(){
    const [a,b,c,d] = lines[0].split(' ').map(Number)
    const resultado_teste = teste_de_selecao(a, b, c, d)
    resultado_teste === true ?
    console.log('Valores aceitos') :
    console.log('Valores nao aceitos')
}
main()
function teste_de_selecao(a, b, c, d){
    return b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 === 0
}