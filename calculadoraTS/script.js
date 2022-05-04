var numero01 = document.getElementById('numero1');
var numero02 = document.getElementById('numero2');
var btn = document.getElementById('calcular');
var resultado = document.getElementById('result');
function somar(n1, n2) {
    return n1 + n2;
}
btn.addEventListener('click', function () {
    resultado.innerHTML = somar(numero01.value, numero02.value);
});
