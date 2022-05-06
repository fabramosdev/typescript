function firstLetterUpperCase(name: string): string {
  let firstLetter = name.charAt(0).toUpperCase();
  return firstLetter + name.substring(1);
}

let nome: string = firstLetterUpperCase('fabiano');


function soma(n1: number, n2: number): number {
  return n1 + n2
}

/**
 * Sintaxe
 *
 * function nomeDaFuncao(parametro: tipo): tipoRetorno {
 *    return parametro
 * }
 *
 */

let algumaSoma = soma(30, 3);
