// _______________________Criando user padrão_______________________
export default class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

// const novoUser = new User("Yuri, y@y.com", "1999-01-01");
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser)); //Chegando a cadeia de protótipo de novoUser

//___________________________Métodos estáticos___________________________
class User2 {
  constructor() {
    this.nome = "Camila";
    this.email = "c@c.com";
    this.cpf = "12312312312";
  }
  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.cpf}`;
  }

  static exibeNome(nome) {
    return nome;
  }
}

const novoUser = new User2("Carol", "c@c.com", "12312312312");
const nomeUser = novoUser.nome;
console.log(User2.exibeNome(nomeUser)); //Camila
