const entrada = require('readline-sync')

const nomePeca = entrada.question("Qual o nome da peca? \n")
const quantidadeComprada = entrada.questionInt("Qual a quantidade comprada da peca? \n")
const precoUnitario = entrada.questionFloat("Qual o preco unitario da peca? \n")
const valorTotal = quantidadeComprada * precoUnitario

console.log("======RESUMO======")
console.log(`Nome da peca: ${nomePeca}`)
console.log(`Quantidade comprada: ${quantidadeComprada}`)
console.log(`Preco unitario: ${precoUnitario.toFixed(2)}`)
console.log(`Valor da compra: ${valorTotal.toFixed(2)}`)