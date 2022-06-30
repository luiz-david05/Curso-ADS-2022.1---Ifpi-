// q1
export function mostrar_numeros_inteiros(numero){
    let i = 1
    console.log(`Numeros inteiros de 1 a ${numero}`)
    
    while(i < numero - 1){
        numero > 0 ? 
        i++ :
        i--
        console.log(`${i}`)
    } 
}

//q2
export function inteirosPares(numero){
    let i = 0

    while(i < numero){
        if(i % 2 === 0){
            console.log(`pares[${i}]`)
        }
        i++
    }
}

//q6
export function tabuada(numero){
    let i = 0, j = numero
    
    console.log(`\nTabuada do ${numero}\n`)

    while(i < 10){
        console.log(`${j} x ${i + 1} = ${j * (i + 1)}`)
        i++
    }
}