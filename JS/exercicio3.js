/* Celsius = (F-32)*5/9  Fahrenheit = C * 9/5 + 32 */


function converteDegree(strTemp) {
      
    const celsiusExists = strTemp.toUpperCase().includes('C')
    const fahrenheitExits = strTemp.toUpperCase().includes('F')

    //fluxo de erro

    if(!celsiusExists && !fahrenheitExits) {
        throw new Error('Grau não identificado')
    }

    //fluxo ideal, F -> C

    let numeroTemp = Number(strTemp.toUpperCase().replace("F",""))
    let formula = numero => (numero - 32) * 5/9
    let tipo_conv = "C"


    //fluxo alternativo, C -> F
    if(celsiusExists) {
        numeroTemp = Number(strTemp.toUpperCase().replace("C",""))
        formula = numero => numero * 9/5 + 32
        tipo_conv = "F"
    }


    return formula(numeroTemp) + tipo_conv


}

try {
    console.log(converteDegree('55C'))
    //converteDegree('55C')
    //converteDegree('55Z')
} catch (error) {
    console.log(error.message)
}





/*
let temperatura = "71ºF"

const conversorCF = function (temperatura) {
    let tipo = "indefinido"
    let tipo_conv = "indefinido"
    let valor = ""
    let valor_conv = 0.0
    for (let i of temperatura) {
        if (i === "F") {
            tipo = "Fahrenheit"
            tipo_conv = "Celsius"
            
        } else if (i === "C") {
            tipo = "Celsius"
            tipo_conv = "Fahrenheit"

        } else if (i>0) {
            valor += i
        }
    }
    let valor_actual = Number(valor)
    if (tipo_conv === "Celsius") {
        valor_conv = (valor_actual - 32) * 5/9
        console.log(valor_conv)
    }

    return `${valor}º ${tipo} e ${valor_conv}º ${tipo_conv}`

}

console.log(conversorCF(temperatura))

minha tentativa
*/