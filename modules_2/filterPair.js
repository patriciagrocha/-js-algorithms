/**No módulo filtrarPares.js, exporte uma função chamada filtrarPares, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares. */

export default function filterPair(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let isPair = arr.filter((number) => number % 2 == 0);
  return isPair;
}
