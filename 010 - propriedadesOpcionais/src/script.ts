function resumo(usuario: { nome: string, idade: number }) {
  return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos.`;
}

let user = {
  nome: 'Fabiano',
  idade: 44,
}

console.log(resumo(user))
