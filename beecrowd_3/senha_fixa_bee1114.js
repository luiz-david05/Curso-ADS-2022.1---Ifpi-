import fs from 'fs';
const input = fs.readFileSync('1114.txt', 'utf8')
var lines = input.split('\n');

function main(){
    let senha = Number(lines.shift())
    while(senha !== 2002){
        console.log('Senha Invalida')
        senha = Number(lines.shift())
    }
    console.log('Acesso Permitido')
}
main()