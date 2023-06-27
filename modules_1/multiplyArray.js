/**No módulo multiplicaArray.js, exporte uma função chamada multiplicaArray, que recebe um array de números como parâmetro e retorna a multiplicação de todos os elementos. */

export function multArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let result = arr.reduce((acc, number) => acc * number);
  return result;
}
