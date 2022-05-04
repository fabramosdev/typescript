
let numero01 = document.getElementById('numero1') as HTMLInputElement;
let numero02 = document.getElementById('numero2') as HTMLInputElement;
let btn = document.getElementById('calcular') as HTMLElement;
let resultado = document.getElementById('result') as HTMLElement;

function somar(n1: number, n2: number) {
  return n1 + n2;
}

btn.addEventListener('click', function () {
  resultado.innerHTML = somar(+numero01.value, +numero02.value).toString();
})


/**
 * - O código acima está tipado
 * - Após rodar o comando "tsc nome_do_arquivo.ts", é compailada uma versão em javascript puro (.js)
 * - Essa versão .js gerada é livre de erros, pois foi checada via TypeScript.
 */
