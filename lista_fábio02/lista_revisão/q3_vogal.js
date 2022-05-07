import { input } from '../../utils.js'
function main(){
    const letra = input('digite a letra: ')
    const what_is = vogal(letra)
}
main()
function vogal(letter){
    let vogais = ['a', 'e', 'i', 'o', 'u']
    if(letter === vogais){ 
        console.log(`${letter} é vogal`)
    }else{
        console.log(`${letter} é consoante!`)
    }
}