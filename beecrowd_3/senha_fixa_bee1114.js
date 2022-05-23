import {input} from '../utils.js'

function main(){
    let senha = Number(input('Digite a senha: '))
        senha === 2002 ? 
        console.log('Acesso permitido') :
        console.log('Acesso negado')
    while(senha !== 2002){
        senha = Number(input('Digite a senha: '))
        senha === 2002 ? 
        console.log('Acesso permitido') :
        console.log('Acesso negado');
}
}
main()