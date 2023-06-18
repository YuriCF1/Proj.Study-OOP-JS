//OBS: SOLID é muito importante no OOP, se necessário, revise!

// _______________________Criando user padrão_______________________
export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get nome() {
    //Não se chama como função, chama sem parenteses. Nunca recebe argumento
    //Podendo ter lógica de condicional
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) { //O set não usa parâmetros, usa o igual diretamente
    if(novoNome === '') {
      throw new Error("Formato inválido")
    }
    this.#nome = novoNome; 
  }

  // #montaObjUser() {
  //   return {
  //     nome: this.#nome,
  //     email: this.#email,
  //     nascimento: this.#nascimento,
  //     role: this.#role,
  //     ativo: this.#ativo,
  //   }; //Passar um obj literal diretamente, abre chaves nos parênteses
  // }

  exibirInfos() {
    // const objUser = this.#montaObjUser();
    // return objUser
    // return `${this.#nome}, ${this.#email}`;
    // return `${objUser.nome}, ${objUser.email}`;
    return `${this.nome}, ${this.email}, ${this.role}`;
  }
}

// const novoUser = new User("Yuri, y@y.com", "1999-01-01");
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser)); //Chegando a cadeia de protótipo de novoUser

//___________________________Métodos estáticos___________________________
// class User2 {
//   constructor() {
//     this.nome = "Camila";
//     this.email = "c@c.com";
//     this.cpf = "12312312312";
//   }
//   exibirInfos() {
//     return `${this.nome}, ${this.email}, ${this.cpf}`;
//   }

//   static exibeNome(nome) {
//     return nome;
//   }
// }

// const novoUser = new User2("Carol", "c@c.com", "12312312312");
// const nomeUser = novoUser.nome;
// console.log(User2.exibeNome(nomeUser)); //Camila


// ___________________________________________SALVANDO NOME E SOBRENOME____________________________________________
/*
  default class User {
 #nome
 #sobrenome
 // restante das propriedades

  constructor (nome, sobrenome, email, nascimento, role, ativo = true) {
   this.#nome = nome
   this.#sobrenome = sobrenome
   // restante das propriedades

    set nome(novoNome) {
   if (novoNome === '') {
     throw new Error('formato não válido')
   }
   let [nome, ...sobrenome] = novoNome.split(" ")
   sobrenome = sobrenome.join(' ')
   this.#nome = nome
   this.#sobrenome = sobrenome
 }

  get nome() {
   return this.#nome
 }

 get sobrenome() {
   return this.#sobrenome
 }

 const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'

 get nome() {
   return `${this.#nome} ${this.#sobrenome}`
 }

 Explicação:

let [nome, ...sobrenome] = novoNome.split(" ");:

A variável novoNome é uma string que contém o nome completo.
O método split(" ") é chamado em novoNome, dividindo a string em um array de substrings, usando o espaço como separador. Cada parte do nome é um elemento do array resultante.
O operador de desestruturação [nome, ...sobrenome] é usado para extrair o primeiro elemento do array (que será o nome) e armazená-lo na variável nome, e todos os elementos restantes do array (que serão os sobrenomes) são armazenados na variável sobrenome como um array.
sobrenome = sobrenome.join(' ');:

A variável sobrenome é um array que contém os sobrenomes.
O método join(' ') é chamado em sobrenome, juntando todos os elementos do array em uma única string, separando-os por um espaço. Isso combina os sobrenomes em uma única string.

// ___________________________________________DIFERENÇA ENTRE FUNÇÕES____________________________________________

/*
class User {
 _nome = '';

 setNome(nome) {
   this._nome = nome;
 }

 getNome() {
   return this._nome;
 }
}

-----FUNÇÕES-------
const nome = novoUser.getNome() //getter
novoUser.setNome('Pedro') //setter
novoUser.exibeInfos() // método normal

-----SETTERS GETTERS------
const nome = novoUser.nome //getter
novoUser.nome = 'Pedro' //setter
novoUser.exibeInfos() // método normal
*/

