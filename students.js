/**Crie um array com uma lista de objetos, cada um representando um aluno. 
 * Cada aluno deve possuir as propriedades nome (string), nota1 (number) e nota2 (number).
 * Utilize uma função de array, como map, filter ou reduce, para calcular a média das notas de cada aluno.
 * Crie um novo array contendo objetos com as propriedades nome e media, onde media é a média das notas.
 * Exiba o array resultante no console, ordenado em ordem decrescente de média. */

const students = [
    {
      name: "John",
      grade1: 8.0,
      grade2: 7.5
    },
    {
      name: "Peter",
      grade1: 7.0,
      grade2: 6.0
    },
    {
      name: "Lucas",
      grade1: 6.5,
      grade2: 7.0
    },
    {
      name: "Anna",
      grade1: 9.5,
      grade2: 9.0
    }
  ];

const studentsAverage = students.map((student)=>{
  const average = (student.grade1 + student.grade2)/2;
  return {name:student.name , average: average};  
})

const descendingAverage = studentsAverage.sort((a,b)=>{
    return b.average - a.average;
})

console.log(descendingAverage);
  

/**O método sort() modifica o array original, portanto, a variável  será alterada. Se  deseja manter o array original é necessário fazer uma cópia antes de aplicar o sort().
 * 
 * O resultado da subtração b.average - a.average determina a ordem correta. Se o valor for negativo, b é considerado menor que a e será colocado antes na ordenação. Se for positivo, b é considerado maior que a e será colocado depois. Dessa forma, o array alunos será ordenado em ordem decrescente de média.
 */