const entrada = require('readline-sync');
const orcamento = require('./funcoesOrcamento');

const cliente = entrada.question('Nome do cliente: ');
const valorMateriais = entrada.questionFloat('Valor dos materiais: ');
const horas = entrada.questionFloat('Horas de servico: ');

const maoDeObra = orcamento.calcularMaoDeObra(horas);
const total = orcamento.calcularTotal(valorMateriais, horas);
const desconto = orcamento.verificarDesconto(total);

console.log('--- RELATORIO DE MANUTENCAO ---');
console.log(`Nome do Cliente: ${cliente}`);
console.log(`Pecas: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Mao de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Desconto: ${desconto}`);