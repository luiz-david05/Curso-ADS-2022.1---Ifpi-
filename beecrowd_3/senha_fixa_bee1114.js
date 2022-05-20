import {input} from '../utils.js'

function main(){
    let senha = Number(input('Digite a senha: '))
    while(senha !== 2002){
        console.log('Senha Invalida')
        senha = Number(input('Digite novamente: '))
        if(senha === 2002){
            console.log('Acesso Permitido')
        }
}
}
main()