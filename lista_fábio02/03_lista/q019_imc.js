import { input } from '../../utils.js'
function main(){
    const altura = Number(input('altura em metros: '))
    const peso = Number(input('peso em kilogramas: '))
    const imc = calcular_imc(altura, peso)
}main()
function calcular_imc (n1, n2){
    const indice_massa = n2 / (quadrado(n1))
    if(indice_massa < 25){
        console.log(`${indice_massa.toFixed(1)} IMC normal!`)
    }else if(indice_massa >= 25 && indice_massa < 30){
        console.log(`${indice_massa.toFixed(1)} IMC Obeso!`)
    }else if(indice_massa > 30){
        console.log(`${indice_massa.toFixed(1)} IMC Obesidade mórbida!`)
    }
}
function quadrado(n){
    return n * n 
}