/* Sistema de gastos familiares */

const carteira = {
    receitas: [0.0],
    despesas: [0.0]
}
/*
const saldoAtual = function () {
    let totalReceitas = 0.0
    for (receitas in carteira.receitas) {
        totalReceitas += carteira.receitas
        console.log(totalReceitas)
    }
    let totalDespesas = 0.0
    for (despesas in carteira.despesas) {
        totalDespesas = totalDespesas + 1
        console.log(totalDespesas)
    }
    return totalReceitas - totalDespesas
}
primeira tentativa deu errado!
*/

function soma (array) {
    let total = 0
    for(let valor of array) {
        total += valor 
    }
    return total
}

function saldoAtual(valor1, valor2) {
    let total1 = soma(valor1)
    let total2 = soma(valor2)
    return total1 - total2
}

function pos_neg(valor_teste) {
    let res = "saldo zero"
    if (valor_teste > 0 ) {
        res ="saldo positivo"
    } else if (valor_teste < 0) {
        res = "saldo negativo"
    }
    return res
}

carteira.receitas = [100, 5, 10, 20]
carteira.despesas = [50, 11, 53,100]

let resultado = saldoAtual(carteira.receitas, carteira.despesas)

console.log(`Saldo ` + resultado + `  ` + pos_neg(resultado))