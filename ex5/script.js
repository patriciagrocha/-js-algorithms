/*Faça um programa em JavaScript que solicite ao usuário que digite seu primeiro nome e seu sobrenome. Em seguida, eles devem utilizar operadores de string para concatenar os dois nomes e exibir o nome completo na tela. */

function concatName(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    document.getElementById("result").innerText = `${firstName} ${lastName}`;
}
function clearInput(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("result").innerText = "";
}