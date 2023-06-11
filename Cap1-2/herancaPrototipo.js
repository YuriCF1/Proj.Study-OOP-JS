const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  role: "admin",
  criarCurso: function () {
    console.log("CursoCriado");
  },
};

// Definindo um protótipo
Object.setPrototypeOf(admin, user); //1- Vai herdar. 2- Vai dar propriedades

admin.criarCurso();
admin.exibirInfos();
