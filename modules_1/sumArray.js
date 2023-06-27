
/**No módulo somaArray.js, exporte uma função chamada somaArray, que recebe um array de números como parâmetro e retorna a soma de todos os elementos. */

 export function sumArray(arr) {
   if (arr.length === 0) {
     return 0;
   }
   let result = arr.reduce((acc, number) => acc + number, 0);
   return result;
 }


