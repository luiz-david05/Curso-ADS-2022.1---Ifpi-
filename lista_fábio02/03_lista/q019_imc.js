import { input } from '../../utils.js'
function main(){
    const altura = Number(input('altura em metros: '))
    const peso = Number(input('peso em kilogramas: '))
    const imc = calcular_imc(altura, peso)
}main()
function calcular_imc (n1, n2){
    const indice_massa = n2 / (quadrado(n1))
    if(indice_massa <= 18.5){
        console.log(`${indice_massa.toFixed(1)} Abaixo do peso!`)
    }else if(indice_massa >= 18.5 && indice_massa <= 24.9){
        console.log(`${indice_massa.toFixed(1)} Peso normal!`)
    }else if(indice_massa >= 25 && indice_massa <= 29.9){
        console.log(`Sobrepeso!`)
    }else if(indice_massa >= 30 && indice_massa <= 34.9){
        console.log(`${indice_massa.toFixed(1)} Obesidade grau 1!`)
    }else if(indice_massa >= 35 && indice_massa <= 39.9){
        console.log(`${indice_massa.toFixed(1)}Obesidade grau 2!`)
    }else if(indice_massa > 40){
        console.log(`${indice_massa.toFixed(1)} Obesidade grau 3!`)
    }
}
function quadrado(n){
    return n * n 
}