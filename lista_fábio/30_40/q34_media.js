//Leia 3 números, calcule e escreva a média dos números.
import {print , input} from '../../utils.js'
function main(){
    print(`digite 3 números e veja a média`)
    const notas = input('Notas: ')
    const [n1, n2, n3] = notas.split(' ').map(Number)
    const media = calcular_media(n1, n2, n3)
    const notas_validas = validar_notas(n1, n2, n3)
    if(notas_validas === true){
        print(`Media = ${media.toFixed(1)}`)
    }else{
        print(`digite uma nota válida`)
    }
}main()
function calcular_media(a, b, c){
    return (a + b + c) / 3
}
function validar_notas(a, b, c){
    return  a <= 10 && a >= 0 && b <= 10 && b >= 0 && c <= 10 && c >= 0
}