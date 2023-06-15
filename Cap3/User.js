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
    return `${this.nome}, ${this.email}`;
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
