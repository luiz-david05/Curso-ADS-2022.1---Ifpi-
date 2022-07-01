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
    let i = 1

    console.log(`Inteiros pares de 1 até ${numero}`)
    while(i < numero){
        if(i % 2 === 0){
            console.log(`pares[${i}]`)
        }
        i++
    }
}

//q3

export function PA(termo_inicial, razao_pa, limite){
    let i = 1

    while(i <= limite){ 
        console.log(`${i}º  termo: ${termo_inicial} `)
        termo_inicial += razao_pa
        i++
    }
}

//q4

export function PG(termo_inicial, razao_pg, limite){
    let i = 1

    while(i <= limite){
        console.log(`${i}º  termo: ${termo_inicial} `)
        termo_inicial *= razao_pg
        i++
    }
}

// q5
export function calcular_fatorial(numero){
    if(numero === 0 || numero === 1){
        return 1
    }

    let result = numero
    let primeiro_multiplicador = numero - 1, i = primeiro_multiplicador

    while(i > 1){
        result *= i
        i--
    }
    
    return result
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

//q7

export function soma_inteiros(numero){
    let i = 2, soma = 0
 
    while(i < numero){
        soma += i
        i++
    }
    return soma
}

//q8

export function multiplos_de_N_entre_limites(numero, limite_superior, limite_inferior ){
    let i = limite_inferior + 1

    while(i < limite_superior){
        if(i % numero === 0){
            console.log(`${i}`)
        }
        i++
    }
}

//q9
export function pares_entre_numeros(limite_superior, limite_inferior){
    let i = limite_inferior + 1

    while(i < limite_superior){
        if(i % 2 === 0){
            console.log(`${i}`)
        }
        i++
    }

}

//q10
export function impares_entre_numeros(limite_superior, limite_inferior){
    let i = limite_inferior + 1

    while(i < limite_superior){
        if(i % 2 !== 0){
            console.log(`${i}`)
        }
        i++
    }

}

//q11

export function primos_entre_limites(limite_superior, limite_inferior){
    let i = limite_inferior

    while(i < limite_superior){
        if(eh_primo(i)){
            console.log(`${i}`)
        }
        i++
    }
}
function eh_primo (numero) {
    let j = 2

    while(j < numero){
        if (numero % j === 0) {
            return false
        }
        j++
    }
    return numero > 1
}