import { input } from '../../utils.js'
function main(){
    const peso = Number(input('peso em kilogramas: '))
    const altura = Number(input('altura em metros: '))
    const imc = calcular_imc(peso, altura)
}main()
function calcular_imc (peso, altura){
    let faixa
    const indice_massa = peso / (altura * altura)
    if(indice_massa <= 18.5){
        faixa = 'Abaixo do peso'
    }else if(indice_massa >= 18.5 && indice_massa <= 24.9){
        faixa = 'Peso ideal'
    }else if(indice_massa >= 25 && indice_massa <= 29.9){
        faixa = 'Acima do peso'
    }else if(indice_massa >= 30 && indice_massa <= 34.9){
        faixa = 'Obesidade grau 1!'
    }else if(indice_massa >= 35 && indice_massa <= 39.9){
        faixa = 'Obesidade grau 2!'
    }else if(indice_massa > 40){
        faixa = 'Obesidade grau 3!'
    }
    console.log(`Imc: ${indice_massa.toFixed(1)}\nfaixa: ${faixa}`)
}