var numero01 = document.getElementById('numero1');
var numero02 = document.getElementById('numero2');
var btn = document.getElementById('calcular');
var resultado = document.getElementById('result');
function somar(n1, n2) {
    return n1 + n2;
}
btn.addEventListener('click', function () {
    resultado.innerHTML = somar(+numero01.value, +numero02.value).toString();
});
/**
 * - O código acima está tipado
 * - Após rodar o comando "tsc nome_do_arquivo.ts", é compailada uma versão em javascript puro (.js)
 * - Essa versão .js gerada é livre de erros, pois foi checada via TypeScript.
 */
