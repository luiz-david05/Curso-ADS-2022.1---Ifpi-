import { input } from '../../utils.js'

function main(){
    const turnos = input('insira seu turno(M matutino, V vespertino e N noturno): ')
    const boas_vindas = verificar_turnos(turnos)
    console.log(`${boas_vindas}`)

}
main()
function verificar_turnos(msg){
    if(msg === 'M'){
        return 'Bom dia!'
    }else if(msg === 'V'){
        return 'Boa tarde!'
    }else if(msg === 'N'){
        return 'Boa noite!'
    }
}