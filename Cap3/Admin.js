//Para utilizar a sintaxe ESM sobre 
//Criando package.json para exportar modulos: npm init -y
//No arquivo package.json, usar o "type": "module",

import User from "./User.js";

// _______________________Criando user admin_______________________
export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo); //Trazendo todas as propriedades que se quer, de User
  }

  //Não funciona, pois #nome é uma propriedade privada, e nome não existe
  // nomeAdmin() {
  //   return `${this.#nome}`
  // }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso}, criado com ${vagas} vagas`
  }
}

// const novoAdmin = new Admin("Roger", "r@r.com", "2000-01-01");
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());

// console.log(novoAdmin.criarCurso("JS", "20"));


/*
Existe uma convenção no uso de ESM em projetos NodejS, 
que é utilizar a extensão .mjs para distinguir quais arquivos são módulos, continuando com a extensão .js para os arquivos que não exportam módulos.

________Sintax CommonJS ou CSJ_________
----------
module.exports = function soma(num1, num2) {
  return num1 + num2;
};

----------
function soma(num1, num2) {
  return num1 + num2;
}
module.exports = soma;

----------
function soma(num1, num2) {
  return num1 + num2;
}

function multiplica(num1, num2) {
  return soma(num1, num2) * 2;
}
module.exports = multiplica;

----------
function soma(num1, num2) {
  return num1 + num2;
}

function multiplica(num1, num2) {
  return soma(num1, num2) * 2;
}
module.exports = { multiplica, soma };

----------
const { multiplica, soma } = require('./caminho/arquivo');
const resultadoMult = multiplica(2, 2);
const resultadoSoma = soma(2, 2);

________Sintax CommonJS ou CSJ_________
export function soma(num1, num2) {
  return num1 + num2;
}
export function multiplica(num1, num2) {
  return soma(num1, num2) * 2;
}

----------
function soma(num1, num2) {
  return num1 + num2;
}
function multiplica(num1, num2) {
  return soma(num1, num2) * 2;
}
export default multiplica;

----------
function soma(num1, num2) {
  return num1 + num2;
}
function multiplica(num1, num2) {
 return soma(num1, num2) * 2;
}
export { multiplica, soma };


-----IMPORTACOES-----
import soma from './caminho/arquivo.js';
import { soma, multiplica } from './caminho/arquivo.js';
import * as operacoes from './caminho/arquivo.js';

const soma = operacoes.soma(1, 2);
const multiplica = operacoes.multiplica(1, 2);

___________________________________________________
Conclusão
O sistema CJS (CommonJS) foi desenvolvido para funcionar como o sistema de exportação/importação de módulos do NodeJS.
O ESM (EcmaScript Modules) foi desenvolvido para que o JavaScript tivesse nativamente seu próprio sistema de módulos - estamos falando do JavaScript interpretado nos navegadores.
O NodeJS implementou o suporte ao ESM a partir da versão 13.
*/