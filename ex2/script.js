/*Criar uma calculadora de Índice de Massa Corporal (IMC). Você precisa escrever um programa em JavaScript que solicite ao usuário o peso e a altura. Em seguida, utilize os operadores matemáticos corretos para calcular o IMC e exiba o resultado na tela. */

function calcImc() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    const imc = weight/(height/100)**2;

    document.getElementById("result").innerText = 'Seu IMC é: ' + imc.toFixed(2);
}
function clearImc(){
    document.getElementById("weight").value = '';
    document.getElementById("height").value = '';
    document.getElementById("result").innerText = '';
}