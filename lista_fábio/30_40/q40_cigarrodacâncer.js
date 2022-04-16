//Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
//fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
import {print,input} from '../../utils.js'
function main(){
    //entradas
    print('calcular a quantidade de dinheiro gasto por um fumante')
    const anos = Number(input('anos fumando: '))
    const cigarros = Number(input('quantos cigarros por dia: '))
    const preço = Number(input('quanto custa a carteira: '))
    //processo
    const anos_perdidos = anos * 365
    const total_desperdiçado = anos_perdidos * (preço * cigarros) / 20
    //saida
    print(`total de dinheiro perdido: ${total_desperdiçado.toFixed(2)} R$`)
}main()