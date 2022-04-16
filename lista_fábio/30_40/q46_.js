/* Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima.*/
import {print, input} from '../../utils.js'
function main(){
    //entradas
    const valor_produto = Number(input('digite o valor do produto: '))
    //processo
    const prestação = Math.trunc((valor_produto / 3))
    const pagamento = Math.trunc((valor_produto % 3) + prestação)
    //saidas
    print(`o valor da entrada é: ${pagamento.toFixed(2)} R$`)
    print(`o valor da 1° parcela é: ${prestação.toFixed(2)} R$`)
    print(`o valor da 2° parcela é: ${prestação.toFixed(2)} R$`)
}main()