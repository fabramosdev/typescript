/**
 * Tipos primitivos
 *
 * Strings/Numbers/Booleans
 *
 */

let nome = document.getElementById('name') as HTMLInputElement;

let idade = document.getElementById('age') as HTMLInputElement;

let profissao = document.getElementById('prof') as HTMLInputElement;

let botao = document.getElementById('btn');

let fraseFinal = document.getElementById('frase');

function montaFrase(inputName: string, inputAge: string, inputProf: string) {
  return `Meu nome é ${inputName}, tenho ${inputAge} anos e sou ${inputProf}`
}

botao.addEventListener('click', () => {
  fraseFinal.innerHTML = montaFrase(nome.value, idade.value, profissao.value);
})
