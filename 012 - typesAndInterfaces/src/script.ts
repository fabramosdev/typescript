type NomeCompleto = string;
let nome: NomeCompleto = 'Fabiano'

/**
 *  Usando o type personalizado
 */

type User = {
  nome: string,
  idade: number,
}

function resumo(usuario: User) {
  return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos.`
}

resumo({
  nome: 'Fabiano',
  idade: 44
})

/**
 * Interfaces
 */

interface Usuario {
  nome: string;
  idade: number;
}

/**
 * Diferenças entre TYPE e INTERFACES
 *
 * Com TYPES não conseguimos adicionar propriedades. Não é alterável.
 * Com INTERFACES conseguimos adicionar propriedades. É alterável.
 *
 */
