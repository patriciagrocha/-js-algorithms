/*Escrever um programa em JavaScript que peça ao usuário para digitar três números. Depois disso, você deve usar variáveis para armazenar esses números e calcular a média entre eles. Por fim, seu programa deve exibir o resultado da média na tela.*/

function calcMedia() {    
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const number3 = parseFloat(document.getElementById("number3").value);

    const media = (number1 + number2 + number3)/3;

    document.getElementById("result").innerText = "A média dos números é: " + media;
}
function clearInput(){
    document.getElementById("number1").value = '';
    document.getElementById("number2").value = '';
    document.getElementById("number3").value = '';
    document.getElementById("result").innerText = '';
}
