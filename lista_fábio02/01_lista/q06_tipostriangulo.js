/*Leia 3 (três) números (cada número corresponde a um 
ângulo interno de um triângulo), verifique e escreva se os 3 (três) 
números formam um triângulo (a soma dos ângulos internos é igual a 180o).Se formam, verifique se formam um triângulo acutângulo (3 ângulos < 90o),retângulo (1 ângulo = 90o) ou obtusângulo (1 ângulo > 90o). 
Não existe ângulo com tamanho 0o (zero grau).*/

import {input} from '../../utils.js'
function main(){
    const angulos = input('digite os 3 números: ').split(' ').map(Number)
    const [a, b, c] = angulos
    if(e_triangulo(a, b, c)){
        const tipo = verificar_tipo(a, b, c)
        console.log(tipo)
    }else{
        console.log('não formam triângulo!')
    }
}
main()
function e_triangulo (a, b, c){
    if(a === 0 || b === 0 || c === 0 ){
        return false
    }
    else{
        return a + b + c === 180
    }
}
function acutangulo (a, b, c){
    return(e_triangulo(a, b, c)) && a < 90 && b < 90 && c < 90
    }
function retangulo (a, b, c){
    return(e_triangulo(a, b, c)) && a === 90 || b === 90 || c === 90
    }
function obtusangulo (a, b, c){
    return(e_triangulo(a, b, c)) && a > 90 || b > 90 || c > 90
    }
function verificar_tipo(a, r, o){
    if (acutangulo(a, r, o)){
        return 'Triângulo Acutângulo!'
    }else if (retangulo(a, r, o)){
        return 'Triângulo Retângulo!'
    }else if (obtusangulo(a, r, o)){
        return 'Triângulo Obtusângulo!'
    }else{
        return 'Outro tipo de Triângulo!'
    }
    }
