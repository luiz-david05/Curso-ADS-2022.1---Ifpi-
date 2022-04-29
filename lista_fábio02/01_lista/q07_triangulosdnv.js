/*leia tres valores (cada numero corresponde a um lado de um triangulo)
verifique e escreva se os 3 numeros formam um triangulo 9 (a soma de dois lados n pode ser menor que o terceiro lado). se formam, verifique se um triangulo equilátero (3 lados iguais), isósceles(2 lados iguais) ou escaleno (3 lados diferentes) Não existe um lado com valor 0 */
import {input} from '../../utils.js'
function main(){
    const lados = input('digite os três valores: ')
    const [lado_a, lado_b, lado_c] = lados.split(' ').map(Number)
    if(e_triangulo(lado_a, lado_b, lado_c)){
        console.log('formam triângulo!')
        const tipo = tipo_triangulo(lado_a, lado_b, lado_c)
        console.log(`\t >>>${tipo}`)
    }else{
        console.log('Não formam Triângulo!')
    }
}
main()
function e_triangulo (a, b, c){
    if(a === 0 || b === 0 || c === 0){
        return false
    }
    else if (a + b < c){
        return false
    }
    else if(a + c < b){
        return false
    }
    else if (b + c < a){
        return false
    }
    else{
        return true
    }
}
function equilatero (a, b, c){
    return (e_triangulo(a, b, c)) && a === b && b === c
}
function isosceles (a, b, c){
    return(e_triangulo(a, b, c)) && a === b || b === c || a === c
}
function escaleno (a, b, c){
    return(e_triangulo(a, b, c)) && a != b && b != c && a != c
}
function tipo_triangulo(eq, is, es){
    if(equilatero(eq, is, es)){
        return 'equilátero!'
    }
    else if(isosceles(eq, is, es)){
        return 'isósceles!'
    }
    else if(escaleno(eq, is, es)){
        return 'escaleno!'
    }
}