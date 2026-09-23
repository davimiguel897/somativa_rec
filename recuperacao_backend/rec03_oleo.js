const entrada = require('readline-sync');

const nivelOleo = entrada.questionFloat("Digite o nivel de oleo da maquina: \n");

console.log("---Nivel de Oleo---")
if(nivelOleo >= 40 && nivelOleo <= 80) {
    console.log("===================")
    console.log(`${nivelOleo}% = NIVEL NORMAL`)
    console.log("===================")
} else {
    console.log("==========================")
    console.log(`${nivelOleo}% = INSPECAO NECESSARIA`)
    console.log("==========================")
}