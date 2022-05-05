// No caso abaixo temos um erro pois a inferencia de tipos deduziu que o array aceita numbers e strings.

// let coisas = ['Fabiano', 44, 'games'];
// coisas.push(true);

// Tipando com "any", o array passa a aceitar qualquer tipo de dado, pois o typescript vai ignorar a verificação.

let outrasCoisas: any = [33, 'Bernardo'];

outrasCoisas.push(true);

// EVITE usar o type any!!!
