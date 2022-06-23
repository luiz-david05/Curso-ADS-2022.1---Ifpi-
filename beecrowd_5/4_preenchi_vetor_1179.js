import fs from 'fs';
const input = fs.readFileSync('1179.txt', 'utf8')
const lines = input.split('\n')

function main(){
    const par = new Array(5)
    const impar = new Array(5)
    let qtd_par = 0
    let qtd_impar = 0
    let x

    for(let i = 0; i < 15; i++){
        x = Number(lines[i])

        if (x % 2 === 0){
            par[qtd_par] = x
            qtd_par++
            if(qtd_par === 5){
                qtd_par = 0
                for(let j = 0; j < 5; j++){
                    console.log(`par[${j}] = ${par[j]}`)
                    qtd_par = 0
                }
            }
        }else{
            impar[qtd_impar] = x
            qtd_impar++
            if(qtd_impar === 5){
                for(let j = 0; j < 5; j++){
                    console.log(`impar[${j}] = ${impar[j]}`)
                    qtd_impar = 0
                }
            }
        }
    }

    for(let j = 0; j < qtd_impar; j++){
        console.log(`impar[${j}] = ${impar[j]}`)
    }
    
    for(let j = 0; j < qtd_par; j++){
        console.log(`par[${j}] = ${par[j]}`)
    } 
}
main()