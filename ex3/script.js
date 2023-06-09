/* Crie um objeto em JavaScript chamado "aluno" que tenha as propriedades "nome" e "idade". Em seguida, solicite ao usuário que digite o nome e a idade de um aluno e armazene esses valores nas propriedades do objeto. Por fim, exiba na tela o nome e a idade do aluno cadastrado.*/

const student = {
    name: "",
    age:""
};

function postStudent(){
    student.name = document.getElementById("name").value;
    student.age = document.getElementById("age").value;
       
    document.getElementById("studentName").innerText = ` Nome: ${student.name} `;
    document.getElementById("studentAge").innerText = ` Idade: ${student.age} anos`;
}
function clearStudent(){
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("studentName").innerText = '';
    document.getElementById("studentAge").innerText = '';
}