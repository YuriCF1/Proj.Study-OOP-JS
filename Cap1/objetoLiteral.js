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
