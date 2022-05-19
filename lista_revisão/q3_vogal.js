import { input } from '../../utils.js'
function main(){
    const letra = input('digite a letra: ')
    const what_is = vogal(letra)
}
main()
function vogal(letter){ 
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        console.log(`${letter} é vogal!`)
    }else{
        console.log(`${letter} é consoante!`)
    }
}