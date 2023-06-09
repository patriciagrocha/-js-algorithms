/*Peça ao usuário que digite três notas e seus respectivos pesos. Em seguida, escreva um programa em JavaScript que calcule a média ponderada dessas notas. A média ponderada é calculada multiplicando cada nota pelo seu peso correspondente, somando todos os resultados e dividindo pelo somatório dos pesos. Exiba o resultado na tela. */

const btnCalc = document.getElementById("btnCalc");
btnCalc.addEventListener("click", (e) => e.preventDefault());
const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click",(e) => e.preventDefault());

function calcMedia(){
    const note1 = parseFloat(document.getElementById("note1").value);
    const note2 = parseFloat(document.getElementById("note2").value);
    const note3 = parseFloat(document.getElementById("note3").value);

    const weight1 = parseFloat(document.getElementById("weight1").value);
    const weight2 = parseFloat(document.getElementById("weight2").value);
    const weight3 = parseFloat(document.getElementById("weight3").value);


    const mediaPond = ((note1*weight1) + (note2*weight2) + (note3*weight3))/(weight1+ weight2 + weight3)

    document.getElementById("result").innerHTML = mediaPond;
}
function clearInput(){
    document.getElementById("note1").value = '';
    document.getElementById("note2").value = '';
    document.getElementById("note3").value = '';
    document.getElementById("weight1").value = '';
    document.getElementById("weight2").value = '';
    document.getElementById("weight3").value = '';
    document.getElementById("result").innerText = '';
}