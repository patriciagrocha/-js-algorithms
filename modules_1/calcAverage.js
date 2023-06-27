/**No módulo calculaMedia.js, exporte uma função chamada calculaMedia, que recebe um array de números como parâmetro e retorna a média aritmética desses números. */

export function calAverage(arr){
    if (arr.length === 0) {
        return 0;
      }
    let result = arr.reduce((acc, number) => acc + number, 0);
    let average = result/arr.length;
    return average;
}
