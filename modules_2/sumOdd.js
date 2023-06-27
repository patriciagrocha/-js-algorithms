/**No módulo somaImpares.js, exporte uma função chamada somaImpares, que recebe um array de números como parâmetro e retorna a soma de todos os números ímpares. */


export default function sumOdd(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let isOdd = arr.filter((number) => number % 2 != 0);
  let result = isOdd.reduce((acc, number) => acc + number);
  return result;
}
