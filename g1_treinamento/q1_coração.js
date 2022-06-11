import fs from 'fs';
const input = fs.readFileSync('q1.txt', 'utf8')
var lines = input.split('\n');
function main(){
    const age = Number(lines[0])
    const fc_atual = Number(lines[1])
    const fc_loaded = calcular_faixas(age, fc_atual)
}
main()
function calcular_faixas(idade, fc_atual){
let zona_atual 
let fc_maxima = 220 - idade
let percent_50 = fc_maxima * (50 / 100)
let percent_60 = fc_maxima * (60 / 100)
let percent_70 = fc_maxima * (70 / 100)
let percent_80 = fc_maxima * (80 / 100)
let percent_90 = fc_maxima * (90 / 100)
if(fc_atual < percent_60){
    zona_atual = 'Atividade moderada'
}else if(fc_atual >= percent_60 && fc_atual < percent_70){
    zona_atual = 'Controle de Peso'
}else if(fc_atual >= percent_70 && fc_atual < percent_80){
    zona_atual = 'Aeróbica'
}else if(fc_atual >= percent_80 && fc_atual < percent_90){
    zona_atual = 'Anaeróbica'
}else{
    zona_atual = 'Esforço Máximo'
}

console.log(`fc atual: ${fc_atual}\nzona fc atual: ${zona_atual}`)
console.log(`\n limites da fc`)
console.log(`\n atividade moderada:`)
console.log(`(${percent_50.toFixed(1)}] --- [${percent_60.toFixed(1)})`)
console.log(`\n Controle de Peso:`)
console.log(`[${percent_60.toFixed(1)}] --- [${percent_70.toFixed(1)})`)
console.log(`\n Aeróbica`)
console.log(`[${percent_70.toFixed(1)}] --- [${percent_80.toFixed(1)})`)
console.log(`\n Anaeróbica`)
console.log(`[${percent_80.toFixed(1)}] --- [${percent_90.toFixed(1)})`)
console.log(`\n Esforço Máximo`)
console.log(`[${percent_90.toFixed(1)} --- [${fc_maxima.toFixed(1)})`)
}