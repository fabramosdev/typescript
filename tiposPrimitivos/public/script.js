/**
 * Tipos primitivos
 *
 * Strings/Numbers/Booleans
 *
 */
var nome = document.getElementById('name');
var idade = document.getElementById('age');
var profissao = document.getElementById('prof');
var botao = document.getElementById('btn');
var fraseFinal = document.getElementById('frase');
function montaFrase(inputName, inputAge, inputProf) {
    return "Meu nome \u00E9 ".concat(inputName, ", tenho ").concat(inputAge, " anos e sou ").concat(inputProf);
}
botao.addEventListener('click', function () {
    fraseFinal.innerHTML = montaFrase(nome.value, idade.value, profissao.value);
});
