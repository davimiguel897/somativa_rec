const entrada = require('readline-sync');

let acumulador = 0;

for (let valor = 1; valor <=6; valor++) {
    const tempo = entrada.questionFloat(`Digite o tempo do atendimento ${valor}: \n`)
    acumulador += tempo;
}
const media = acumulador / 6

console.log("---RELATORIO DE ATENDIMENTO---")
console.log(`Soma dos tempos: ${acumulador}`)
console.log(`Media: ${media.toFixed(2)}`)