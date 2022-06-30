import fs from  'fs';
import { inteirosPares } from './funcoes_utils.js';
const input = fs.readFileSync('q2.txt', 'utf8')
const lines = input.split('\n');

function main(){
    const n = Number(lines[0])
    const pares = inteirosPares(n)
}
main()
