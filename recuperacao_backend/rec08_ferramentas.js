const entrada = require('readline-sync');
const ferramentas = [];

for (let i = 0; i <= 3; i++) {
    const ferramenta = {
        nome: entrada.question(`Digite o nome da ferramenta ${i+1}: \n`),
        quantidade: entrada.questionInt(`Digite a quantidade da ferramenta ${i+1}: \n`),
        quantidadeMinima: entrada.questionInt(`Digite a quantidade minima da ferramenta ${i+1}: \n`)
    };
    ferramentas.push(ferramenta);
}
    
console.log("===SISTEMA DE CADASTRO DE MATERIAIS===")
for (let i = 0; i < ferramentas.length; i++){
    const produto = ferramentas[i];

    let situacao;
    if (produto.quantidade < produto.quantidadeMinima) {
        situacao = "REPOR";
    } else {
        situacao = "ESTOQUE SUFICIENTE";
    }

console.log("---RELATORIO DE FERRAMENTAS---")
console.log(`Ferramenta: ${produto.nome}`);
console.log(`Quantidade: ${produto.quantidade}`);
console.log(`Quantidade Minima: ${produto.quantidadeMinima}`);
console.log(`Situacao: ${situacao}`);
console.log("-".repeat(20));
}