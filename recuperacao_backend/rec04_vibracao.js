const entrada = require('readline-sync')

const vibracao = entrada.questionInt("Digite o nivel vibracao: ")

console.log("---SENSOR DE VIBRACAO---")
if(vibracao <= 3) {
    console.log(`${vibracao}mm/s: NORMAL`);
} else if(vibracao > 3 && vibracao <= 6) {
    console.log(`${vibracao}mm/s: ATENCAO`);
} else {
    console.log(`${vibracao}mm/s: CRITICA`);
}