const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "admin",
  ativo: true,

  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

// user.exibirInfos();

// const exibir = user.exibirInfos();
// const exibir2 = user.exibirInfos; //Passando essa função para uma variável, ela perde o contexto
// exibir2();

const exibir2PorBaixoDosPanos = function () {
  console.log(this.nome, this.email);
  // console.log(this); //Traz o objeto global, dizendo onde ele tá
};
exibir2PorBaixoDosPanos();

const exibirNome = exibir2PorBaixoDosPanos.bind(user);
exibirNome();


/*
OUTRAS MANEIRAS PARA DITAR CONTEXTOS
________________________________CALL________________________________

EX1:______________________
function exibeInfos() {
  console.log(this.nome, this.email)
}

const user = {
  nome: 'Mariana',
  email: 'm@m.com'
}

exibeInfos.call(user)

EX2:_____________________
function User(nome, email) {
  this.nome = nome
  this.email = email
  
  this.exibeInfos = function(){
    console.log(this.nome, this.email)
  }
}

const newUser = new User('mariana', 'm@m.com')

const outroUser = {
  nome: 'Rodrigo',
  email: 'r@r.com'
}

newUser.exibeInfos() //mariana m@m.com
newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com

EX3:_____________________
function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const user = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.call(user, this.nome, this.email)
 }
}

user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

___________________________________APPLY___________________________________
function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
 const user = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.apply(user, [this.nome, this.email])
 }
}
 user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com

Usando arrays, é possível passar os argumentos via variável 
ou até mesmo usando a propriedade arguments que existe internamente em todo objeto.

 */