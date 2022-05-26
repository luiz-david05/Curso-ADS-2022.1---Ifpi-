import fs from 'fs';
const input = fs.readFileSync('1037.txt', 'utf8')
var lines = input.split('\n');

function main(){
    const valor = Number(lines[0])
    const na_faixa = intervalo(valor)
    console.log(na_faixa)
}
main()
function intervalo(v1){
    let faixa
    if(v1 >= 0 && v1 <= 25  ){
        faixa = 'Intervalo [0,25]'
    }else if(v1 > 25 && v1 <= 50){
        faixa = 'Intervalo (25,50]'
    }else if(v1 > 50 && v1 <= 75){
        faixa = 'Intervalo (50,75]'
    }else if(v1 > 75 && v1 <= 100){
        faixa = 'Intervalo (75,100]'
    }else{
        faixa = 'Fora de intervalo'
    }
    return faixa
}
