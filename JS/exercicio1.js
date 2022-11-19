/* Notas escolares */

let nota_str = "nota indefinida"

const notaConvertida = function (nota) {
    if(nota<60) {
        nota_af = "F"
    } else if(nota<=69) {
        nota_af = "D"
    } else if(nota<=79) {
        nota_af = "C"
    } else if(nota<=89) {
        nota_af = "B"
    } else if(nota<=100) {
        nota_af = "A"
    } else nota_af = "nota inválida"
    
    return nota_af
}

nota_str = notaConvertida(55)
console.log(`A nota convertida é ` + nota_str)