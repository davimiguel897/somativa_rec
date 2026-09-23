function calcularMaoDeObra(horas) {
const valorHora = 95;
return horas * valorHora;
}
function calcularTotal(valorMateriais, horas) {
return valorMateriais + calcularMaoDeObra(horas);
}
function verificarDesconto(total) {
if (total >= 1000) {
return 'DESCONTO DE 10%';
}
return 'SEM DESCONTO';
}
module.exports = {
calcularMaoDeObra,
calcularTotal,
verificarDesconto
};