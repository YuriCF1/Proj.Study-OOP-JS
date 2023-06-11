//OBS: Na vida real, não se passa prototype diretamente, só Object.create. Pois é usado classes. Se

//____________________Usando CONSTRUTOR para criar um objeto____________________
function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `Nome ${this.nome}, email ${this.email}`;
  };
}

// const novoUser = new User("Yuri", "yur@y.com"); //User será o protótipo de novoUser
// console.log(novoUser.exibirInfos());

//___________________Usando constructor e passando protótipos___________________
function Admin(role, nome, email) {
  //   User.call(this, "Yuri", "yur@y.com"); //this se refeindo ao User
  User.call(this, nome, email); //this se refeindo ao User
  this.role = role || "estudante";
}

Admin.prototype = Object.create(User.prototype); //Passando para dentro da prototype de Admin, as propriedades de User

const novoUser2 = new Admin("admin", "carla", "a@a.com");
// console.log(novoUser2.exibirInfos());
// console.log(novoUser2.role);

//_________________Usando objecto literal e pegando protótipos_________________
const userX = {
  exibirInfos: function (nome) {
    return nome;
  },
};

const novoUserX = Object.create(userX);
// console.log(novoUserX.exibirInfos("Yury"));
// console.log(userX.isPrototypeOf(novoUserX));

const userY = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfos: function () {
    //   return [this.nome, this.email];
    return { ...this };
  },
};

const novoUserY = Object.create(userY);
novoUserY.init("Yuris", "yu@yu.com");
// console.log(novoUserY.exibirInfos());
const { nome, email } = novoUserY.exibirInfos();
console.log(nome, email);
