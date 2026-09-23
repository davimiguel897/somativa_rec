const entrada = require('readline-sync');

const totalProduto = [];

for(let ciclos = 1; ciclos <= 12; ciclos++) {
    const produtoCiclo = entrada.questionInt(`Quantidade de produtos produzidos no ciclo ${ciclos}: `);
    let total = produtoCiclo * ciclos
    totalProduto.push(total)
}

console.log("---RELATORIO DE CICLOS---")
for (let i = 0; i < totalProduto.length; i++){
    console.log(`Ciclo ${i+1} - ${totalProduto[i]}`);
}