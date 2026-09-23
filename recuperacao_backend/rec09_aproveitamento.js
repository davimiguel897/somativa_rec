const entrada = require('readline-sync');

function calcularAproveitamento(util, total) {
    const percentual = util / total * 100
    return percentual
}

function classificarAproveitamento(percentual){
    if (percentual >= 90) {
        return 'EXCELENTE'
    } else if(percentual >= 75 && percentual <= 89.99){
        return 'ADEQUADO'
    } else {
        return 'REVISAR PROCESSO'
    }
    
}

const total = entrada.questionFloat("Quantidade de materia total: ")
const util = entrada.questionFloat("Quantidade de materia prima util: ")
const percentual = calcularAproveitamento(util, total);
const classificacao = classificarAproveitamento(percentual);

console.log("------RELATORIO DE APROVEITAMENTO------");
console.log(`Materia-prima total: ${total}`)
console.log(`Materia-prima util: ${util}`)
console.log(`Percentual: ${percentual}`)
console.log(`Classificacao: ${classificacao}`)
